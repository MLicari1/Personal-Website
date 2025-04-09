import React from "react";
import './hobbiesStyles.css'

import PikesPeak from '../../assets/PikesPeak.jpg'
import PikesPeak2 from '../../assets/PikesPeak2.jpg'
import SvartifossTrail from '../../assets/SvartifossTrail.jpg'
import HighlineTrail from '../../assets/HighlineTrail.jpg'
import HighlineTrail2 from '../../assets/HighlineTrail2.jpg'

function Hobbies() {
    return(
        <div className="hobbies">
            <div className="container">
                <h1>Here are some of my hobbies</h1>
                <p>Hiking is a big passiong of mine</p>
                <div className="img-container">
                    <img src={PikesPeak} alt="/"/>
                    <img src={PikesPeak2} alt="/"/>
                    <img src={SvartifossTrail} alt="/" />
                    <img src={HighlineTrail} alt="/"/>
                    <img src={HighlineTrail2} alt="/"/>
                </div>
            </div>
        </div>
    )
}

export default Hobbies