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
  scrollDownButton: {
    zIndex: 100,
  }
}));




export default function Home() {
  const classes = useStyles();

  const [isCarouselOpen, setIsCarouselOpen] = useState(false);

  const bottomElement = useRef(null);


  return (
    <div className={classes.sectionContainer}>
      <Image
        src={Background} alt="tBackground image"
        className={classes.backgroundImage}
        cover={true}
      />
      <ReleasesCarousel open={isCarouselOpen} />
      <ScrollDownButton
        onCLick={() => setIsCarouselOpen(!isCarouselOpen)} 
      />

    </div>

  )
}
