import React, { Suspense } from 'react';
import Catagories from '../Catagories';
;


const LeftAside = () => {
    return (
        <div>
            <Suspense fallback={<span className="loading loading-dots loading-xl"></span>}>
            <Catagories></Catagories>
            </Suspense>
        </div>
    );
};

export default LeftAside;