import React from 'react';
import { RiHome2Line } from "react-icons/ri";
const Errorpage = () => {
    return (
      <div className="container mx-auto pt-10 lg:pt-30 flex flex-col justify-center items-center bg-[#f8fafc] ">
        <h2 className="forest-green font-extrabold  text-4xl md:text-8xl">404</h2>
        <div className=" flex flex-col items-center space-y-3 ">
          <p>page not found</p>
          <p >
            Looks like this friendship link is broken. The page <br />
            you're looking for doesn't exist or has been moved.
          </p>
        </div>
        <button
          className="btn bg-forest-green text-white mt-4 mb-10"
          onClick={() => history.back()}
        >
          <RiHome2Line /> Go Back
        </button>
      </div>
    );
};

export default Errorpage;