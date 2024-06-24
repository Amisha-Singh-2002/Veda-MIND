import React ,{ useState } from 'react'

import logo from "./assets/pepole.png"
import robot from "./assets/robot.png"
import image2 from "./assets/image2.png"
import right11 from "./assets/image1_files/right11.png"
import './Hero.css'

const Hero = () => {
    return (
    <>
    <div className="text">
    <div className="textleft">
        <div className="textleft1">
        <h1>Let's Build Something amazing with GPT-3 OpenAI</h1>
        </div>
        <div className="textleft2">
        <h4>The first version of GPT was released in 2018 and contained 117 million parameters. The second version of the model, GPT-2, was released in 2019 with around 1.5 billion parameters. As the latest version, GPT-3 jumps over the last model by a huge margin with over 175 billion parameters, which is more than 100 times its predecessor and ten times more than comparable programs.</h4>
        </div> 
        <div className="textleft3">
                <div className="textleft3a">
                    your email address
                </div>
                <div className="textleft3b">
                <span> <h3>Get Started</h3></span>
                </div> 
        </div>
        <div className="personimg">
            <div className="pimg">
                <img src={logo} alt="GPT3 Logo" />
            </div>
            <div className="textimg">
                <h4>1,600 people requested access a visit in last 24 hours</h4>
            </div>
        </div>
    </div>
    <div className="textright">
         <img src={right11} alt="GPT3 Robot" />
    </div>
        
    </div>
    </>
    )
}

export default Hero