import React from "react";

const BannerCard = () => {
  return (
    <div>
      <div className="footer footer-center pt-18 mb-6">
        <div className=" space-y-4">
          <h2 className="text-4xl font-bold">
            Friends to keep close in your life
          </h2>
          <p className="gray">
            Your personal shelf of meaningful connections. Browse, tend, and
            nurture the <br /> relationships that matter most.
          </p>
          <button className="btn bg-forest-green text-white font-semibold">
            + Add a Friend
          </button>
        </div>
      </div>

      <div className="mx-6 px-5 pb-4 grid grid-flow-col grid-rows-1 gap-4">
        <div className="flex flex-col justify-center items-center shadow-xl p-6 bg-white rounded-2xl">
          <p className="font-semibold text-xl md:text-3xl">10</p>
          <p>total Friends</p>
        </div>
        <div className="flex flex-col justify-center items-center shadow-xl p-6 bg-white rounded-2xl">
          <p className="font-semibold text-xl md:text-3xl">3</p>
          <p>On Track</p>
        </div>
        <div className="flex flex-col justify-center items-center shadow-xl p-6 bg-white rounded-2xl">
          <p className="font-semibold text-xl md:text-3xl">6</p>
          <p>Need Attention</p>
        </div>
        <div className="flex flex-col justify-center items-center shadow-xl p-6 bg-white rounded-2xl">
          <p className="font-semibold text-xl md:text-3xl">12</p>
          <p>Interactions This Month</p>
        </div>
      </div>
    </div>
  );
};

export default BannerCard;
