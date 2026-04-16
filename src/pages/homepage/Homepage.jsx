import React, { Suspense } from "react";
import BannerCard from "../../components/homepage/BannerCard";
import AllFriendCards from "../../components/homepage/AllFriendCards";

const LoadingFallback = () => {
  return (
    <div className="container mx-auto flex justify-center items-center my-20">
      {" "}
      <p className=" loading loading-spinner forest-green "> </p>
    </div>
  );
};

const Homepage = () => {
  return (
    <div className="container mx-auto bg-[#f8fafc]  ">
      <BannerCard />
      <Suspense fallback={<LoadingFallback />}>
        <AllFriendCards />
      </Suspense>
    </div>
  );
};

export default Homepage;
