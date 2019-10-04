import React from 'react';

function FoulButton(setstrikes, strikes){
    // console.log('four button is working');
    if(strikes == 0){
        setstrikes(strikes + 1);
    } 
    if(strikes == 1){
        setstrikes(strikes + 2);
    }
    if(strikes == 2){
        setstrikes(strikes + 0);
    }
}

export default FoulButton;