import React from 'react';
import SwimmingImage from '../../assets/swimming.png'
import classImage from '../../assets/class.png'
import playgroundgImage  from '../../assets/playground.png'

const Qzone = () => {
    return (
        <div className='bg-base-100 p-3'>
        <h2 className='font-bold nb-5'>Qzone</h2>
        <div>
     <img src={SwimmingImage} alt=''></img>
     <img src={classImage} alt=''></img>
     <img src={playgroundgImage} alt=''></img>
     
        </div>
        </div>
    );
};

export default Qzone;