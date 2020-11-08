import React from 'react'
import { makeStyles, IconButton } from '@material-ui/core';
import { ArrowUpward } from '@material-ui/icons';
import { animateScroll } from 'react-scroll'



const useStyles = makeStyles((theme) => ({
    downScrollButtonDiv: {
        zIndex: 1500,
        position: 'fixed',
        top: '0px',
        left: "50%",
        display: 'flex',
        flexDirection: 'column',
    },
    scrollDownButtonLabel: {
        fontFamily: 'CovidVirus',
        fontSize: '40px',
        // textShadow: '-0.2px 0 white, 0 0.2px white, 0.2px 0 white, 0 -0.2px white'
    },
    button: {
        margin: 'auto',
    },
}));

interface ScrollUpButtonParams {
    onCLick?: Function,
}


export default function ScrollUpButton(props: ScrollUpButtonParams) {
    const classes = useStyles();

    function handleButtonClick(event: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
        if (props.onCLick !== undefined) {
            props.onCLick(event);
        }
        animateScroll.scrollToBottom();
    }

    return (
        <div className={classes.downScrollButtonDiv} >
            <IconButton
                className={classes.button}
                aria-label="delete"
                size="medium"
                onClick={event => handleButtonClick(event)}
            >
                <ArrowUpward fontSize="inherit" />
            </IconButton>
            <span className={classes.scrollDownButtonLabel}>GO BACK</span>
        </div>
    );
}
