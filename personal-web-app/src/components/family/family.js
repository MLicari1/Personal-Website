import React from "react";

import './familyStyles.css'

import Familypic from '../../assets/Family.jpg'
import Familypic2 from '../../assets/Family2.jpg'
import Hiking from '../../assets/Hiking.jpg'
import Myself from '../../assets/Myself.jpg'
import Wedding from '../../assets/Wedding.jpg'

function Family() {
    return(
        <div className="family">
            <h1>My family and I</h1>
            <div className="family-img-container">
                <img src={Familypic} alt="/" />
                <img src={Familypic2} alt="/" />
                <img src={Hiking} alt="/" />
                <img src={Myself} alt="/" />
                <img src={Wedding} alt="/" />
            </div>
        </div>
    )
}

export default Family