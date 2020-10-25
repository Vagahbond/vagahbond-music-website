import React from 'react';
import {
    makeStyles,
    AppBar,
    Toolbar,
    IconButton,
    Typography,
    Badge,
    Button,
    Avatar
} from '@material-ui/core';

import { CalendarToday, Album } from '@material-ui/icons';

import Logo from "../../assets/Soundcloud_pic.jpg";

const useStyles = makeStyles(theme => ({
    grow: {
        flexGrow: 1,
    },
    title: {
        fontFamily: 'CovidVirus',
        // display: 'none',
        [theme.breakpoints.up('sm')]: {
            display: 'block',
        },
    },
    inputRoot: {
        color: 'inherit',
    },
    sectionDesktop: {
        display: 'none',
        [theme.breakpoints.up('md')]: {
            display: 'flex',
        },
    },
    sectionMobile: {
        display: 'flex',
        [theme.breakpoints.up('md')]: {
            display: 'none',
        },
    },


}));

const NavBar = () => {
    const classes = useStyles();

    return (
        <div className={classes.grow}>
            <AppBar position="static">
                <Toolbar>
                    <div className={classes.sectionDesktop} >
                        <Button
                            // className={classes.button}
                            startIcon={<Avatar alt="Vagahbond" src={Logo} />}
                            color="inherit">
                            Home
                        </Button>

                    </div>
                    <div className={classes.sectionMobile} >
                        <IconButton
                            aria-label="show 4 new mails"
                            color="inherit">
                            <Badge color="secondary">
                                <Avatar alt="Vagabond" src={Logo} />
                            </Badge>
                        </IconButton>
                    </div>


                    <div className={classes.grow} />
                    <Typography className={classes.title} variant="h3" noWrap>
                        VAGAHBOND
                    </Typography>
                    <div className={classes.grow} />
                    <div className={classes.sectionDesktop} >
                        <Button
                            // className={classes.button}
                            startIcon={<CalendarToday />}
                            color="inherit">
                            Events
                        </Button>

                        <Button
                            // className={classes.button}
                            startIcon={<Album />}
                            color="inherit">
                            Releases
                        </Button>


                    </div>
                    <div className={classes.sectionMobile} >
                        <IconButton
                            aria-label="Check releases"
                            aria-haspopup="true"
                            //onClick={console.log("clicked")}
                            color="inherit"
                            children={<CalendarToday />}
                        />
                        <IconButton
                            aria-label="Check releases"
                            aria-haspopup="true"
                            //onClick={console.log("clicked")}
                            color="inherit"
                            children={<Album />}
                        />
                    </div>

                </Toolbar>
            </AppBar>
        </div>
    );
}

export default NavBar;
