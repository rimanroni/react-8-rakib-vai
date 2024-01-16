import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Phone from './Phone';

const Phones = () => {
    const data = useLoaderData();
     
    return (
        <div className='py-10 px-8'>
            <h1 className='text-2xl text-center'>All Categories Phones </h1>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5'>
           {data.map(phone=><Phone data={phone} key={phone.id}/>)}
            </div>

        </div>
    );
};

export default Phones;