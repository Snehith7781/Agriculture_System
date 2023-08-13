import React from 'react'
import Navbar from './Navbar';
import More1 from './More1';
export default function Home() {
    return (
      
      <>
  <Navbar />
        <div className="home-page">
          <div className="background-image">
            {/* You can adjust the URL to your desired background image */}
          </div>
          <div className="content">
            <h1>Welcome to Farm-Eezy</h1>
            <p>A Smart Initiative For Farmers.</p>
          </div>
        </div>

      <More1 />
  
        </>
      );
}
