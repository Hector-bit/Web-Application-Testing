import React from 'react';
import { useState } from 'react';

const Strikes = props => {
    const [Strikes, setStrikes] = useState(0);

    // const numOfStrikes = 0;

    

    return (
        <div>
            <h2>STRIKES:</h2>
            <span className='display'>{Strikes}</span>
        </div>
    )
}

export default Strikes;