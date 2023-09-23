import React from 'react';
import { useLoaderData } from 'react-router-dom';

const JobDescription = () => {
    const data= useLoaderData()
    console.log(data);
    return (
        <div>
            <h2>ooooooooooooooooooooooooooooooooo</h2>
        </div>
    );
};

export default JobDescription;