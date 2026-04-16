import React, { useContext, useState } from "react";
import { FriendContext } from "../../context/FriendProvider";
import call from "../../assets/images/call.png";
import text from "../../assets/images/text.png";
import video from "../../assets/images/video.png";

const Timeline = () => {
  const { storedFriend, storedFriendText, storedFriendVideo } =
    useContext(FriendContext);

  const allactivities = [
    ...storedFriend.map((friend) => ({ ...friend, type: "call" })),
    ...storedFriendText.map((friend) => ({ ...friend, type: "text" })),
    ...storedFriendVideo.map((friend) => ({ ...friend, type: "video" })),
  ];

  const [filter, setFilter] = useState("");

  const filteredActivities = allactivities
    .filter((activity) => {
      if (filter === "call" || filter === "text" || filter === "video") {
        return activity.type === filter;
      }
      
      if (
        filter === "sort by newest" ||
        filter === "sort by oldest" ||
        filter === "with" ||
        filter === ""
      ) {
        return true;
      }

      return activity.name.toLowerCase().includes(filter);;
    })
    .sort((a, b) => {
      if (filter === "sort by newest") {
        return new Date(b.timestamp) - new Date(a.timestamp);
      }
      if (filter === "sort by oldest") {
        return new Date(a.timestamp) - new Date(b.timestamp);
      }
      return 0;
    });

  const icon = (type) => {
    if (type === "call")
      return (
        <img
          src={call}
          alt="call"
        />
      );
    if (type === "text")
      return (
        <img
          src={text}
          alt="text"
        />
      );
    if (type === "video")
      return (
        <img
          src={video}
          alt="video"
        />
      );
  };

  return (
    <div className="container mx-auto">
      <div className="px-10 my-5">
        <h2 className="font-bold text-4xl">Timeline</h2>
      </div>
      <div className="container mx-auto px-10">
        <input
          type="text"
          className="input"
          placeholder="Filter timeline"
          list="timeline"
          value={filter}
          onChange={(e) => setFilter(e.target.value.toLowerCase())}
        />
        <datalist id="timeline">
          <option value="text"></option>
          <option value="call"></option>
          <option value="video"></option>
          <option value="sort by newest"></option>
          <option value="sort by oldest"></option>
        </datalist>
      </div>

      {allactivities.length === 0 ? (
        <div className="container mx-auto flex justify-center items-center my-19 text-4xl">
          <p className="forest-green">No activities yet.....</p>
        </div>
      ) : filteredActivities.length === 0 ? (
        <div className="container mx-auto flex justify-center items-center my-19 text-4xl">
          <p className="text-gray-400">No data available for "{filter}"</p>
        </div>
      ) : (
        <div className="space-y-4 p-10">
          {filteredActivities.map((activity, k) => (
            <div
              key={k}
              className="bg-white rounded-xl shadow-md p-4 flex items-center gap-4"
            >
              <div
                className={`flex items-center gap-2 px-3 py-1 rounded-full text-sm font-medium  `}
              >
                {icon(activity.type)}
              </div>
              <div className="flex-1">
                <h3 className="  text-lg">
                  <span className="forest-green font-semibold capitalize ">
                    {activity.type}
                  </span>{" "}
                  with {activity.name}
                </h3>
                <p className="text-sm text-gray-400">
                  {activity.timestamp
                    ? new Date(activity.timestamp).toLocaleTimeString("en-US", {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                        hour: "2-digit",
                        minute: "2-digit",
                        hour12: true,
                      })
                    : ""}
                </p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Timeline;
