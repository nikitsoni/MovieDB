import React from 'react';
import './Movies.css'

const Movies = ({title, poster, date}) => {
    return(
        <div className='content'>
            <img src={'https://image.tmdb.org/t/p/w185' + poster} alt='poster' />
            <h1>{title}</h1>
            <p>{date}</p>
        </div>
    )
}

export default Movies;