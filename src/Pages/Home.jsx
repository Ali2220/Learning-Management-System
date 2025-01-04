import React from 'react';
import Navbar from '../Components/Common/Navbar';
import Body from '../Components/Common/Body';
import Footer from '../Components/Common/Footer';

const Home = () => {
  return (
    <>
      <div className="p-6 bg-[#BEAFD2]">
        <div className="bg-white rounded-xl p-2">
          <Navbar />
          <Body />
          <Footer />
        </div>
      </div>
    </>
  );
};

export default Home;
