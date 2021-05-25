import {Paper} from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    media: {
        margin: "20px 0",
        height: 400,
        backgroundSize: "cover",
        backgroundImage: 'url(https://cdn.quasar.dev/img/parallax2.jpg)',
    },
});

const Banner = () => {
    const classes = useStyles();

    return  <Paper variant="outlined" className={classes.media} />
}

export default Banner