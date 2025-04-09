import React from "react";
import './heroStyles.css'

import Video from '../../assets/OOTMeadow.mp4'

function Hero() {
    return(
        <div className="hero">
            <video autoPlay loop muted id="video">
                <source src={Video} type="video/mp4" />
            </video>
            <div className="overlay"></div>
            <div className="content">
                <h1>Welcome to my website!</h1>
                <h2>This is a collection of random info about me</h2>
            </div>
        </div>
    )
}

export default Hero