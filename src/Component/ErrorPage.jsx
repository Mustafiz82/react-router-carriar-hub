import React from 'react';
import { NavLink } from 'react-router-dom';

const ErrorPage = () => {
    return (  
        <div className='flex h-screen w-screen justify-center items-center flex-col gap-5'>
            <h1 className='text-5xl'>Oops</h1>
            <h1 className='text-3xl'>Lnk Not found</h1>
            <button className='btn'><NavLink to="/">Go Back</NavLink></button>
        </div>
    );
};

export default ErrorPage;