import React from "react"
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Router from 'next/router';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },
    secondToolbar: {
        backgroundColor: "#FFF",
        color: "#000"
    },
    thirdToolbar: {
        backgroundColor: "#4caf50",
        textAlign: "center"
    }
}));

const Header: React.FC = () => {
    const classes = useStyles();

    return (
        <AppBar position="static">
            <Toolbar>
                <Typography variant="h6" className={classes.title}>
                    Jakala Next
                </Typography>
                <Typography variant="subtitle1">
                    Next.js 10.2.3
                </Typography>
            </Toolbar>
            <Toolbar className={classes.secondToolbar}>
                <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                    <MenuIcon />
                </IconButton>
                <Typography variant="h6" className={classes.title}>
                    Jakala
                </Typography>
                <Button
                    color="inherit"
                    onClick={() => Router.push('/login')}
                >
                    Login
                </Button>
            </Toolbar>
            <div className={classes.thirdToolbar}>
                <Typography variant="body2">
                    SCEGLI UN PREMIO
                </Typography>
            </div>
        </AppBar>
    )
}

export default Header
