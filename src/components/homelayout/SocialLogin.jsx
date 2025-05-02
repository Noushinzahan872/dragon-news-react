import React from 'react';
import { FaGithub } from 'react-icons/fa6';
import { FcGoogle } from 'react-icons/fc';

const SocialLogin = () => {
    return (
        <div>
           <h2 className='text-xl font-bold'> Login with</h2>
           <div className='space-y-5'>
            <button className='btn btn-secondary btn-outline w-full'><FcGoogle size={24}/>Login wih google</button>
            <button className='btn btn-outline btn-primary w-full'><FaGithub size={24}/>Login with github</button>
           </div>
        </div>
    );
};

export default SocialLogin;