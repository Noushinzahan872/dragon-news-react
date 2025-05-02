import React, { use } from 'react';
import { NavLink } from 'react-router';

const categoryPromise=fetch('/categories.json')
.then((res)=>res.json());


const Catagories = () => {
    // console.log(categoryPromise);
    const Catagories=use(categoryPromise);

    return (
        <div>
          <h2 className='font-bold'>All  Categories ({Catagories.length})</h2>
          <div className='grid grid-cols-1 mt-5 gap-3'>
            {
                Catagories.map((catagory)=>(
                    <NavLink key={catagory.id} className={'btn bg-base-100 border-0 hover:bg-base-200 font-semibold text-accent'}
                    to={`/catagory/${catagory.id}`}
                    >{catagory.name}</NavLink>
                ))
            }
          </div>
        </div>
    );
};

export default Catagories;