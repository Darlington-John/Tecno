import React from 'react';
import './../Styles/Tailwind.css';
import './../Styles/Animations.css';

import OverLay from './../Components/OverLay/OverLay';
import Navbar from './../Components/Navbar/Navbar';
import HomePageBody from './HomePageBody';

const HomePage = () => {
  return (
    <div className="box-border overflow-clip">
      <Navbar />
      <OverLay />
      <HomePageBody />
    </div>
  );
};

export default HomePage;
