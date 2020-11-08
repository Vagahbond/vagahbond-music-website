import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core';
import { AutoRotatingCarousel, Slide } from "material-auto-rotating-carousel";
import { isMobile } from "react-device-detect";
import Image from 'material-ui-image';
import ReactPlayer from 'react-player'
import ScrollUpButton from '../scroll_up_button/ScrollUpButton'
import Background from "../../assets/banniere.jpg";
import Background2 from "../../assets/banner-2.jpg";

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

const useStyles = makeStyles(theme => ({
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
    backgroundImage: {
        zIndex: 200,
        position: 'fixed',
        height: '100vh',
        width: '100vw',
        right: 0,
        left: 0,
        top: 0,
        overflow: 'hiden',
    }
}))

interface ReleasesCarouselProps {
    open: Boolean,
}

export default function ReleasesCarousel(props: ReleasesCarouselProps) {
    const classes = useStyles();

    const [currentRelease, setCurrentRelease] = useState(mockReleases[0]);

    return (
        <>
            {
                props.open &&
                <Image
                    className={classes.backgroundImage}
                    src={currentRelease.banner}
                    alt="album cover"
                    cover={true}
                    imageStyle={{
                        position: 'fixed',
                    }}
                />
            }
            {
                props.open &&
                <ScrollUpButton />
            }
            <AutoRotatingCarousel
                autoplay={false}
                open={props.open}
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
        </>
    );
}