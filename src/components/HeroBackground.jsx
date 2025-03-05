import React from 'react'
import { video_webm, video_mp4 } from '../assets';

const HeroBackground = () => {
    return (
        <div className="hero-video-container">
            <video 
                autoPlay 
                muted 
                loop 
                preload="metadata"
                className="hero-video"
            >
                <source src={video_webm} type="video/webm" />
                <source src={video_mp4} type="video/mp4" />
            </video>
            <div className="hero-overlay"></div>
        </div>
    )
}

export default HeroBackground;