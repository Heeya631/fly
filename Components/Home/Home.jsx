import React from 'react'

// Imported Assests
import video from '../../assests/Video1.mp4';
import aeroplane from '../../assests/takeoff.png';

const Home = () => {
  return (
    <>
    <div className='home flex container'>
        <div className="mainText">
            <h1>Create Ever-lasting memories with us</h1>

        </div>


    <div className="homeImages flex">

        <div className="videodiv">
            <video src = {video} autoPlay muted loop className = "video"></video>
        </div>
        <img src={aeroplane} className='plane'/>

    </div>
    </div>
    </>
  )
}

export default Home

