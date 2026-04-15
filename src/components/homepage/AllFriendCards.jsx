import React, { use } from "react";
import FriendCards from "../ui/FriendCards";

const dataPromise = fetch("/data.json").then((res) => res.json());

const AllFriendCards = () => {
  const friendData = use(dataPromise);
//   console.log(friendData, "friends");

  return (
    <div className="container mx-auto my-5">
      <div className="border-t mx-12 border-[#bfcde0]"></div>
      <h2 className="font-bold text-3xl  pl-5  mx-8 mt-4">Your Friends</h2>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 p-10">
        {friendData.map((friend,i) => {
          return (
              <FriendCards key={i} friend={friend} />
          );
        })}
      </div>
    </div>
  );
};

export default AllFriendCards;
