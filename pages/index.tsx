// import '../styles/Home.module.css'
import React, { useState, useRef } from 'react'
import { makeStyles } from '@material-ui/core';

import ScrollDownButton from '../components/scroll_down_button/ScrollDownButton'
import ReleasesCarousel from '../components/carousel/ReleasesCarousel'

import Image from 'material-ui-image';

import Background from "../assets/banniere.jpg";


const useStyles = makeStyles((theme) => ({
  sectionContainer: {
    maxHeight: '100vh',
    maxWidth: '100vw',
    overflow: 'hidden',
  },
  backgroundImage: {
    position: 'fixed',
    minHeight: '100vh',
    minWidth: '100vw',
    maxHeight: '100vh',
    maxWidth: '100vw',
    right: 0,
    left: 0,
    // objectFit: 'cover',
    overflow: 'hiden',
    zIndex: 0,
  },
}));




export default function Home() {
  const classes = useStyles();

  const [isCarouselOpen, setIsCarouselOpen] = useState(false);

  const bottomElement = useRef(null);


  return (
    <>
      <div className={classes.sectionContainer}>
        <Image
          src={Background} alt="tBackground image"
          className={classes.backgroundImage}
          cover={true.toString()}
        />
        <ReleasesCarousel open={isCarouselOpen}/>
        <ScrollDownButton bottomReference={bottomElement} onCLick={() => setIsCarouselOpen(!isCarouselOpen)} />

      </div>
      <div ref={bottomElement} />
    </>
  )
}
