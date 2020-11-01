// import '../styles/Home.module.css'
import React, { useState } from 'react'
import Image from 'material-ui-image';
import { isMobile } from "react-device-detect";
import { AutoRotatingCarousel, Slide } from "material-auto-rotating-carousel";

import ReactPlayer from 'react-player'

import { makeStyles } from '@material-ui/core';

import Background from "../assets/banniere.jpg";

const mockReleases = [
  {
    title: 'Hate',
    artists: 'Aaskell & Vagahbond',
    youtube: 'https://www.youtube.com/watch?v=TvFpKbf8HE0',
    soundcloud: 'https://soundcloud.com/vagabond-music-872243664/aaskell-x-vagahbond-hate',
    cover: 'https://i1.sndcdn.com/artworks-PVvwb3PveGa0n9rt-m6E6Dg-t500x500.jpg',
    banner: 'https://i1.sndcdn.com/artworks-PVvwb3PveGa0n9rt-m6E6Dg-t500x500.jpg',
    description: `A single we made with Aaskell, which ended up beeing the most finished and polished of my tracks.
     It constitutes a mix between a very classical orchestral music, a thick ambiance, and a wobbly touch with dubstep sounds here and there.`
  },
  {
    title: 'The whalish speech',
    artists: 'Vagahbond',
    youtube: 'https://www.youtube.com/watch?v=BrjQRwYSNcU',
    soundcloud: 'https://soundcloud.com/vagabond-music-872243664/vagahbond-the-whalish-speech',
    cover: 'https://i1.sndcdn.com/artworks-PVvwb3PveGa0n9rt-m6E6Dg-t500x500.jpg',
    banner: 'https://i1.sndcdn.com/artworks-PVvwb3PveGa0n9rt-m6E6Dg-t500x500.jpg',
    description: `A calm envelopping ambiance over a soothing rythm much inspired by deep medi artists.`
  },
];


const useStyles = makeStyles((theme) => ({
  sectionContent: {
    zIndex: 5,
    width: '80vh',
    height: '80vh',
  },
  embeddedElement: {
    maxWidth: '330px',
    maxHeight: '330px',
  },
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
  mediaContent: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around'
  }

}));




export default function Home() {
  const classes = useStyles();

  const [isCarouselOpen, setIsCarouselOpen] = useState();

  return (
    <div className={classes.sectionContainer}>
      <Image
        src={Background} alt="tBackground image"
        className={classes.backgroundImage}
        cover
      />
      <AutoRotatingCarousel
        autoplay={ false }
        open={ isCarouselOpen }
        mobile={ isMobile }
        className={ classes.sectionContent }

      // containerStyle={{width: '80vh', height: '80vh'}}
      >
        {
          mockReleases.map(release => (
            <Slide
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


                  {/* <ReactPlayer
                    className={classes.embeddedElement}
                    url={release.soundcloud}
                    config={{
                      soundcloud: {
                        options: {
                          showArtwork: false,
                          buying: false,
                          color: '#000000',
                          sharing: 'true',
                          show_user: 'true',
                        },
                      },
                    }}
                  /> */}

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

    </div>
  )
}
