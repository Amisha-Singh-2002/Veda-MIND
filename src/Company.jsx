import React from 'react'
import download from "./assets/download.png"
import download1 from "./assets/download1.png"
import download2 from "./assets/download2.png"
import download3 from "./assets/download3.png"
import download4 from "./assets/download4.png"
import './company.css'
function Company() {
  return (
    
        <div className="companydownload">

                <img src={download} alt="GPT3 download" />
                <img src={download1} alt="GPT3 download1" />
                <img src={download2} alt="GPT3 download2" />
                <img src={download3} alt="GPT3 download3" />
                <img src={download4} alt="GPT3 download4" />
        </div>
   
  )
}

export default Company