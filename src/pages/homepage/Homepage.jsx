import React from 'react';
import BannerCard from '../../components/homepage/BannerCard';
import AllFriendCards from '../../components/homepage/AllFriendCards';

const Homepage = () => {
    return (
      <div className="container mx-auto bg-[#f8fafc]  ">
            <BannerCard />
            <AllFriendCards/>
      </div>
    );
};

export default Homepage;