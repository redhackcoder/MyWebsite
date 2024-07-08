import React, { useState, useEffect } from 'react';
import './BackgroundVideo.css';
import Header from './Header';
const videoSources = [
    'http://localhost:5050/images/v1.mp4',
    'http://localhost:5050/images/v2.mp4',
    'http://localhost:5050/images/v3.mp4'
];

const BackgroundVideo = () => {
    const [currentVideoIndex, setCurrentVideoIndex] = useState(0);

    useEffect(() => {
        const videoInterval = setInterval(() => {
            setCurrentVideoIndex((prevIndex) => (prevIndex + 1) % videoSources.length);
        }, 5000); // Change video every 5 seconds

        return () => clearInterval(videoInterval);
    }, []);

    return (
        <div className="video-background">
            <video
                key={currentVideoIndex}
                src={videoSources[currentVideoIndex]}
                autoPlay
                muted
                loop
                className="video-content"
            ></video>
            <Header />
            <div className="overlay-content">
                <h1>Wander Nama</h1>
                <p>Your Subtitle Here</p>
            </div>
        </div>
    );
};

export default BackgroundVideo;
