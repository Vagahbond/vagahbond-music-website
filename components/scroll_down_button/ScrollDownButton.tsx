import React from 'react'
import { makeStyles, IconButton } from '@material-ui/core';
import { ArrowDownward } from '@material-ui/icons';
import { animateScroll } from 'react-scroll'



const useStyles = makeStyles((theme) => ({
    downScrollButtonDiv: {
        position: 'fixed',
        zIndex: 100,
        bottom: '0px',
        left: "50%",
        display: 'flex',
        flexDirection: 'column',
    },
    scrollDownButtonLabel: {
        fontFamily: 'CovidVirus',
        fontSize: '30px',
    },
    button: {
        margin: 'auto',
    }
}));

interface ScrollDownButtonParams {
    onCLick?: Function,
}


export default function ScrollDownButton(props: ScrollDownButtonParams) {
    const classes = useStyles();

    function handleButtonClick(event: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
        props.onCLick(event);
        animateScroll.scrollToBottom();
    }

    return (
        <div className={classes.downScrollButtonDiv} >
            <span className={classes.scrollDownButtonLabel}>CHECK OUT MY WORK!</span>
            <IconButton
                className={classes.button}
                aria-label="delete"
                size="medium"
                onClick={event => handleButtonClick(event)}
            >
                <ArrowDownward fontSize="inherit" />

            </IconButton>
        </div>
    );
}
