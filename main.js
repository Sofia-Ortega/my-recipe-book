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
  });

  // Emitted when the window is closed.
  mainWindow.on('closed', function() {
    // Dereference the window object, usually you would store windows
    // in an array if your app supports multi windows, this is the time
    // when you should delete the corresponding element.
    mainWindow = null;
  });
}

//..........................Receive react msg.....................
let newData = {};
ipcMain.on("sendAddData", (event, arg) => {
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
  console.log("Sending review data", newData);
  mainWindow.send("reviewData", newData);
})

ipcMain.on("submit", () => {
  console.log("Submitting: ", newData );


  fs.readFile("./data.json", function (err, oldData) {
    var copy = JSON.parse(oldData);
    console.log("copy:", copy);
    copy.data.push(newData);


    fs.writeFile("./data.json", JSON.stringify(copy), (err) => {
      if (err) return console.log(err);
      console.log("The data was appended to the file")
    })
  })

  newData = {};
})

ipcMain.on("deleteRecipe", (event, id) => {
  console.log("Deleting: ", id);
  // setDirList(dirList.filter((dir) => dir.id !== id))

  fs.readFile("./data.json", function (err, oldData) {
    let storeJson = JSON.parse(oldData);
    storeJson.data = storeJson.data.filter((dat) => dat.id !== id);


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
