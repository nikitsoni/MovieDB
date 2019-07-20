import React from 'react';
import Tilt from 'react-tilt';
import brain from './logo.png';
import './Logo.css';

const Logo = () => {
    return(
        <div className='logo-container'>
            <Tilt className="tilt" options={{ max : 55 }} style={{ height: 100, width: 100 }} >
            <div className="image"> <img  style={{ height: 100, width: 100 }} alt='brain' src={brain}/></div>
            </Tilt>
        </div>
    );
}
export default Logo;
