import React from 'react'
import aboutimg from '../images/about.png';

function About() {
  return (
    <div id = 'about'>
        <div className='about-image'>
            <img src={aboutimg} alt=''/>
        </div>
        <div className='about-location'>
            <h1>LEARN MORE ABOUT US</h1>
            <p>Sai Leo Nagar,West Tambaram,Poonthandalam, Village, Chennai, Tamil Nadu 600044</p>
            <button>READ MORE</button>
        </div>
        <div className='about-zenista'>

        </div>
    </div>
  )
}

export default About