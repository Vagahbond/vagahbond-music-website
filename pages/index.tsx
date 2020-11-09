// import '../styles/Home.module.css'
import React, { useState, useRef } from 'react'
import ReactPlayer from 'react-player'
import { makeStyles, IconButton } from '@material-ui/core';
import { ArrowDownward } from '@material-ui/icons';
import { animateScroll } from 'react-scroll'
import { AutoRotatingCarousel, Slide } from 'material-auto-rotating-carousel'
import { ArrowUpward } from '@material-ui/icons';
import Image from 'material-ui-image';
import { isMobile } from "react-device-detect";

import Background from "../assets/banniere.jpg";
import Background2 from "../assets/banner-2.jpg";

const mockReleases = [
  {
    title: 'Hate',
    artists: 'Aaskell & Vagahbond',
    youtube: 'https://www.youtube.com/watch?v=TvFpKbf8HE0',
    soundcloud: 'https://soundcloud.com/vagabond-music-872243664/aaskell-x-vagahbond-hate',
    cover: 'https://i1.sndcdn.com/artworks-PVvwb3PveGa0n9rt-m6E6Dg-t500x500.jpg',
    banner: Background2,
    description: `A single we made with Aaskell, which ended up beeing the most finished and polished of my tracks.
     It constitutes a mix between a very classical orchestral music, a thick ambiance, and a wobbly touch with dubstep sounds here and there.`
  },
  {
    title: 'The whalish speech',
    artists: 'Vagahbond',
    youtube: 'https://www.youtube.com/watch?v=BrjQRwYSNcU',
    soundcloud: 'https://soundcloud.com/vagabond-music-872243664/vagahbond-the-whalish-speech',
    cover: 'https://i1.sndcdn.com/artworks-PVvwb3PveGa0n9rt-m6E6Dg-t500x500.jpg',
    banner: Background,
    description: `A calm envelopping ambiance over a soothing rythm much inspired by deep medi artists.`
  },
];


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
  },
  sectionContent: {
    zIndex: 5,
    width: '80vh',
    height: '80vh',
  },
  embeddedElement: {
    maxWidth: '300px',
    maxHeight: '200px',
  },
  mediaContent: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around'
  },
  carouselBackgroundImage: {
    zIndex: 200,
    position: 'fixed',
    height: '100vh',
    width: '100vw',
    right: 0,
    left: 0,
    top: 0,
    overflow: 'hiden',
  },
  upScrollButtonDiv: {
    zIndex: 1500,
    position: 'fixed',
    top: '0px',
    left: "50%",
    display: 'flex',
    flexDirection: 'column',
},
upScrollButtonLabel: {
    fontFamily: 'CovidVirus',
    fontSize: '30px',
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    borderRadius: '14px',
    padding: '5px',
    //textShadow: '-0.1px 0 white, 0 0.1px white, 0.1px 0 white, 0 -0.1px white'
},
upScrollButton: {
    margin: 'auto',
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    borderRadius: '100px', //rounded
    marginBottom: '10px',
    marginTop: '10px',
},
downScrollButtonDiv: {
  position: 'fixed',
  zIndex: 100,
  bottom: '0px',
  left: "50%",
  display: 'flex',
  flexDirection: 'column',
},
downScrollButtonLabel: {
  fontFamily: 'CovidVirus',
  fontSize: '30px',
},
downScrollButton: {
  margin: 'auto',
}
}));




export default function Home() {
  const classes = useStyles();

  const [isCarouselOpen, setIsCarouselOpen] = useState(false);
  const [currentRelease, setCurrentRelease] = useState(mockReleases[0]);



  return (
    <div className={classes.sectionContainer}>
      <Image
        src={Background} 
        cover={true}
        alt="tBackground image"
        className={classes.backgroundImage}
        
      />
      {
        isCarouselOpen &&
        <Image
          className={classes.carouselBackgroundImage}
          src={currentRelease.banner}
          alt="album cover"
          cover={true}
          imageStyle={{
            position: 'fixed',
          }}
        />
      }
      {
        isCarouselOpen &&
        <div className={classes.upScrollButtonDiv} >
            <IconButton
                className={classes.upScrollButton}
                aria-label="delete"
                size="medium"
                onClick={() => animateScroll.scrollToTop()}
            >
                <ArrowUpward fontSize="inherit" />
            </IconButton>
            <span className={classes.upScrollButtonLabel}>GO BACK</span>
        </div>
      }
      <AutoRotatingCarousel
        autoplay={false}
        open={isCarouselOpen}
        mobile={isMobile}
        className={classes.sectionContent}
        onChange={(i) => setCurrentRelease(mockReleases[i])}
      // containerStyle={{width: '80vh', height: '80vh'}}
      >
        {
          mockReleases.map(release => (
            <Slide
              key={release.title}
              media={
                <div className={classes.mediaContent}>
                  <ReactPlayer
                    url={release.soundcloud}
                    className={classes.embeddedElement}
                  />
                  <ReactPlayer
                    url={release.youtube}
                    className={classes.embeddedElement}
                  />

                </div>
              }
              mediaBackgroundStyle={{ backgroundColor: '#000000' }}
              style={{ backgroundColor: '#000000' }}
              title={release.title}
              subtitle={release.description}
            />

          ))
        }


      </AutoRotatingCarousel>
      <div className={classes.downScrollButtonDiv} >
            <span className={classes.downScrollButtonLabel}>CHECK OUT MY WORK!</span>
            <IconButton
                className={classes.downScrollButton}
                aria-label="delete"
                size="medium"
                onClick={() => {animateScroll.scrollToBottom()}
            >
                <ArrowDownward fontSize="inherit" />

            </IconButton>
        </div>

    </div>

  )
}
