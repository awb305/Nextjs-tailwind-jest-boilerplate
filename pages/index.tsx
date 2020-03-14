import React from 'react';
import { NextPage } from 'next';

import '../styles/main.css';

const Home: NextPage = () => {
  return (
    <div>
      <div className="hero">
        <h1 className="bg-blue-400 ">Home</h1>
      </div>
      <div className="bg-green-800 h-24">Page</div>
    </div>
  );
};

export default Home;
