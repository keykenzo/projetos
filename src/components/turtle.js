import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const styles = {
  card: {
    maxWidth: 345,
    margin:50,
  },
  media: {
    height: 140,
  },
};

function Turtle(props) {
  const { classes } = props;
  return (
    <Card className={classes.card}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image="/images/turtle.jpg"
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Turtle
          </Typography>
          <Typography component="p">
          Turtles are diapsids of the order Testudines characterized by a special bony or cartilaginous shell developed from their ribs and acting as a shield. "Turtle" may refer to the order as a whole or to fresh-water and sea-dwelling testudines. The order Testudines includes both extant and extinct species.
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
        <Button size="small" color="primary">
          Learn More
        </Button>
      </CardActions>
    </Card>
  );
}

Turtle.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Turtle);