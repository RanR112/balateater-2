import React from 'react'
import video from './contoh.mp4';


export default function HeroBackground() {
    return (
        <div className="hero-video-container">
            <video autoPlay muted loop className="hero-video">
                <source src={video} type="video/mp4" />
            </video>
        <div className="hero-overlay"></div>
    </div>
    )
}
