import React from 'react';
import worldimg from '../components/Assets/world.png';
import starrynight from '../components/Assets/starrynight.jpg';


const LandingPage = () => {
  return ( 
    <div className="landing-page-container" style={{ backgroundImage: `url(${starrynight})`}}>
      <h1 className="lp-title">Kingdom Study</h1>
      <div className='lp-inside-image' style={{ backgroundImage: `url(${worldimg})`}}>

      </div>
    </div>
  );
};
 
export default LandingPage;