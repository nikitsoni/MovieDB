import React from 'react';
import Tilt from 'react-tilt';
import brain from './Component/brain.png';
import './Component/Logo.css';

const Logo = () => {
    return(
        <div className='logo-container'>
            <Tilt className="tilt" options={{ max : 55 }} style={{ height: 150, width: 150 }} >
            
            </Tilt>
        </div>
    );
}
export default Logo;
