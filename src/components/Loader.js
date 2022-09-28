import React from 'react';

//Gif
import spinner from '../gif/spinner.gif'

const Loader = () => {
    return (
        <div>
            <img src={spinner}  alt="loader" />
            <h2>Loading ...</h2>
        </div>
    );
};


export default Loader;