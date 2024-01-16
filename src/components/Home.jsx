import React from 'react';
import Bannar from './Bannar';
import Phones from './Phones';
import { useLoaderData } from 'react-router-dom';

const Home = () => {
  
    return (
        <div>
          <Bannar/>
         <Phones/>
        </div>
    );
};

export default Home;