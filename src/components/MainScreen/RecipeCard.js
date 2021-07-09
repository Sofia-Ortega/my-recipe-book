import React from 'react';
import {Link} from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';

import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
  root: {
    width: "250px",
    height: "150px",
    padding: theme.spacing(2),
    margin: "10px"

  },

  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
}));

export default function RecipeCard({dat, openCard}) {
  const classes = useStyles();

  function handleClick() {
    openCard(dat)
  }

  return (
    <Card className={classes.root} variant="outlined">
      <CardContent>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
          {dat.type}
        </Typography>
        <Typography variant="h5" component="h2">
          {dat.title}
        </Typography>
        <Typography variant="body2" component="p" color="textSecondary">
          {dat.description}
        </Typography>
      </CardContent>
      <CardActions>
        <Link to="/recipe">
          <Button size="small" onClick={handleClick}>Open</Button>
        </Link>
      </CardActions>
    </Card>
  );
}
