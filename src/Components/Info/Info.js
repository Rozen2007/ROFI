import React from 'react'
import './Info.css'
import Header from '../Header/Header'
function Info() {
    return (
        <div className="hero_section">
        <Header/>
        {/* <div class="background"/> */}
            <div className="info">
            <div className="info_about" >
                <span>ROFI</span>: CONVERT <br/> YOUR TEXT  TO <br/>HANDWRITING.  
                
            </div>
{/*       
                <div className="info_image" >
                    <img src={image} alt="pen" />
                </div> */}
   
                </div>
        

    </div>
    )
}

export default Info
