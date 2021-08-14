'use strict';

// Import parts of electron to use

const {app, BrowserWindow, ipcMain} = require('electron');
const path = require('path')
const url = require('url')
const fs = require('fs')

// Keep a global reference of the window object, if you don't, the window will
// be closed automatically when the JavaScript object is garbage collected.
let mainWindow;

// Keep a reference for dev mode
let dev = false;
if ( process.defaultApp || /[\\/]electron-prebuilt[\\/]/.test(process.execPath) || /[\\/]electron[\\/]/.test(process.execPath) ) {
  dev = true;
}

function createWindow() {
  // Create the browser window.
  mainWindow = new BrowserWindow({
    width: 1024,
    height: 768,
    show: false,
    // webPreferences: {
    //   devTools: true
    // }
  });

  mainWindow.setMenu(null)


  // and load the index.html of the app.
  let indexPath;
  if ( dev && process.argv.indexOf('--noDevServer') === -1 ) {
    indexPath = url.format({
      protocol: 'http:',
      host: 'localhost:4000',
      pathname: 'index.html',
      slashes: true
    });
  } else {
    indexPath = url.format({
      protocol: 'file:',
      pathname: path.join(__dirname, 'dist', 'index.html'),
      slashes: true
    });
  }
  mainWindow.loadURL( indexPath );


  // Don't show until we are ready and loaded
  mainWindow.once('ready-to-show', () => {
    mainWindow.show();
    // Open the DevTools automatically if developing
    if ( dev ) {
      mainWindow.webContents.openDevTools();
    }

    let sendData;
    fs.readFile("./data.json", function (err,data) {
      sendData = JSON.parse(data);
      mainWindow.send("dataJson", sendData);
    })
  });

  // Emitted when the window is closed.
  mainWindow.on('closed', function() {
    // Dereference the window object, usually you would store windows
    // in an array if your app supports multi windows, this is the time
    // when you should delete the corresponding element.
    mainWindow = null;
  });
}

//..........................Communication w React.....................
var newData = {};
ipcMain.on("sendDataJson", (event, arg) => {
  //send data from json to react
  let sendData;
  fs.readFile("./data.json", function (err,data) {
    sendData = JSON.parse(data);
    mainWindow.send("dataJson", sendData);
  })
})

ipcMain.on("sendAddData", (event, arg) => {
  //keeps track of data from add page
  if(arg.title) {
    newData.title = arg.title;
  }
  if(arg.description) {
    newData.description = arg.description;
  }
  if(arg.ingredients) {
    newData.ingredients = arg.ingredients;
  }
  if(arg.steps) {
    newData.steps = [];
    arg.steps.map((step, index) => {
      newData.steps.push(step.name);
    });
  }
  if(arg.notes) {
    newData.notes = arg.notes;
    newData.id = Date.now();
  }

})

ipcMain.on("sendReviewData", () => {
  //sends stored temporary data from add layout
  console.log("Sending review data", newData);
  mainWindow.send("reviewData", newData);
})

ipcMain.on("updateCart", (event, arg) => {
  //updates ingredients in cart

  //set ups
  console.log(arg);
  let myTitle = arg.title;
  let checkedIngr = arg.ingredients.filter((item) => item.checked === true);
  let sendData;

  //reads data from json
  fs.readFile("./data.json", function (err,data) {
    data = JSON.parse(data);
    data.cart[myTitle] = checkedIngr[0]; //updates data.cart

    //finds index of data to update ingredients
    var index = data.data.findIndex((recipe) => recipe.title === myTitle)
    data.data[index].ingredients = arg.ingredients;

    //sends updated data to react
    sendData = data;
    mainWindow.send("dataJson", sendData);

    //writes files
    fs.writeFile("./data.json", JSON.stringify(data), (err) => {
      if (err) return console.log(err);
      console.log("Shopping Cart was updated")
    })

  })

  //sends number of ingredients added for popup in mainlayout
  //FIXME: not sending correct number of checkedIngr
  mainWindow.send("addedCartItems", checkedIngr.length);
})

ipcMain.on("submit", () => {
  //updates data.json to add new recipe created by user
  let argData = newData;

  //opens data.json
  fs.readFile("./data.json", function (err, oldData) {
    //updates data
    var copy = JSON.parse(oldData);
    copy.data.push(argData);

    //rewrites file
    fs.writeFile("./data.json", JSON.stringify(copy), (err) => {
      if (err) return console.log(err);
      console.log("The data was appended to the file")
    })
  })

  //resets temporary data
  newData = {};
})

ipcMain.on("deleteRecipe", (event, id) => {
  //deletes recipe
  console.log("Deleting: ", id);

  //opens data.json
  fs.readFile("./data.json", function (err, oldData) {
    let storeJson = JSON.parse(oldData);

    //finds index of data
    let index = storeJson.data.findIndex((dat) => dat.id === id);
    let deleteTitle = storeJson.data[index].title; //stores title
    delete storeJson.cart[deleteTitle]; //deletes correct data.cart ingredients
    storeJson.data.splice(index, 1); //deletes data.data info

    //if storeJson has no recipes,
    if(storeJson.data === []) storeJson.data = ["empty"];

    //rewrites data.json
    fs.writeFile("./data.json", JSON.stringify(storeJson), (err) => {
      if (err) return console.log(err);
      console.log("The recipe was deleted")
    })
  })

})



//..................................................................

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on('ready', createWindow);

// Quit when all windows are closed.
app.on('window-all-closed', () => {
  // On macOS it is common for applications and their menu bar
  // to stay active until the user quits explicitly with Cmd + Q
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  // On macOS it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (mainWindow === null) {
    createWindow();
  }
});
