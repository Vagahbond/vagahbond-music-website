import React from 'react'
import { makeStyles, IconButton } from '@material-ui/core';
import { ArrowDownward } from '@material-ui/icons';


const useStyles = makeStyles((theme) => ({
    downScrollButton: {
        position: 'fixed',
        zIndex: 500,
        bottom: '0px',
        left: "50%",
    }
}));

interface ScrollDownButtonParams {
    bottomReference : React.MutableRefObject<any>,
    onCLick? : Function,
}


export default function ScrollDownButton( props: ScrollDownButtonParams ) {
    const classes = useStyles();

    function handleButtonClick(event: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
        props.onCLick(event);
        props.bottomReference.current.scrollIntoView({ behaviour: 'smooth'})
    }

    return (
        <IconButton
            aria-label="delete"
            className={classes.downScrollButton}
            size="medium"
            onClick={ event => handleButtonClick(event) }
        >
            <ArrowDownward fontSize="inherit" />
           
        </IconButton>
    );
}
