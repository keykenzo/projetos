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

function Salamander(props) {
  const { classes } = props;
  return (
    <Card className={classes.card}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image="/images/Salamander.jpg"
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Salamander
          </Typography>
          <Typography component="p">
          Salamanders are a group of amphibians typically characterized by a lizard-like appearance, with slender bodies, blunt snouts, short limbs projecting at right angles to the body, and the presence of a tail in both larvae and adults. All present-day salamander families are grouped together under the order Urodela.
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

Salamander.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Salamander);