import React, {useState} from "react";
import TextField from '@material-ui/core/TextField';
import Items from "./mapItems/Items";
import Button from "@material-ui/core/Button";
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import Grid from "@material-ui/core/Grid"
import {makeStyles} from "@material-ui/core/styles";


const useStyles = makeStyles( (theme) =>({
  root: {
    margin: "20px 0px",
  },
  headings: {
    fontFamily: "Bodoni MT",
    fontSize: "28px",
    marginLeft: "15px",
  },
  addBtn: {
    color: "#4d0069"
  },
  body: {
    marginLeft: "30px",
    // backgroundColor: "green"
  }
}))

export default function IngredientInput() {
  const classes = useStyles();

  const [value, setValue] = useState("")
  const [ingrList, setIngrList] = useState([
    {'name': "chicken", 'id': 0},
    {'name': 'cheese', 'id': 1},
  ]);

  const handleChange = (event) => {
    setValue(event.target.value);
  }

  function addIngr() {
    if(value === '') return;
    let data = {
      'name': value,
      'id': ingrList.length + value.length
    }

    //update and rest
    setIngrList([...ingrList, data])
    setValue('');

  }

   const delIngr = (id) => {
    setIngrList(ingrList.filter((ingr) => ingr.id !== id))
  }


  return (
    <div className={classes.root}>
      <div className={classes.headings}>
        Ingredients:
      </div>
      <div className={classes.body}>
        <Items delItem={delIngr} itemList={ingrList} numbered={true} />
        <Grid container spacing={1} alignItems="flex-end">

          <Grid item>
            <form onSubmit={addIngr} >
              <TextField
                id="outlined-basic"
                label="Add Ingredient"
                variant="standard"
                value={value}
                onChange={handleChange}
              />
            </form>
          </Grid>
          <Grid item>
            <AddCircleOutlineIcon className={classes.addBtn} onClick={addIngr}/>
          </Grid>
        </Grid>
      </div>
    </div>
  )
}
