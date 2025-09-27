import krul from '../assets/krul.jpg';
import React from 'react';

function Home() {
    return (
        <div>
            <h1>🥕 Warzywex</h1>
            <p>Najświeższe egzotyczne warzywa prosto od POLSKIEGO rolnika!</p>
            <img src={krul} alt={"JD"}/>
        </div>
    )
}

export default Home
