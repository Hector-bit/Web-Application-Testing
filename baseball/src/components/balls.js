import React from 'react';
import { useState } from 'react';

const Balls = props => {
    const [balls, setBalls] = useState(0);

    console.log(balls);

    return (
        <div>
            <h2>BALLS:</h2>
            <span className='display'>{balls}</span>
        </div>
    )
}

export default Balls;