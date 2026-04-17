import React, { useContext } from "react";
import { FaRegTrashAlt } from "react-icons/fa";
import { FiArchive, FiPhoneCall, FiVideo } from "react-icons/fi";
import { RiNotificationSnoozeLine } from "react-icons/ri";
import { MdOutlineTextsms } from "react-icons/md";
import { useLoaderData, useParams } from "react-router";
import { FriendContext } from "../../context/FriendProvider";

// const dataPromise = fetch("/data.json").then((res) => res.json());

const FriendDetails = () => {
  const { friendId } = useParams();
  // console.log(friendId, "friendId");

  // const friendData = use(dataPromise);
  // console.log(friendData);
  const friendsData = useLoaderData();
  // console.log(friendsData);

  const expectedFriend = friendsData.find(
    (friendData) => friendData.id == friendId,
  );
  // console.log(expectedFriend);

  const {
    id,
    name,
    picture,
    email,
    days_since_contact,
    status,
    tags,
    bio,
    goal,
    next_due_date,
  } = expectedFriend;

  const { handleCall } = useContext(FriendContext);
  const { handleText } = useContext(FriendContext);
  // console.log(handleCall, storedFriend , "friendContext");
  const { handleVideo } = useContext(FriendContext);

  // console.log(id);


  return (
    <div className="container mx-auto bg-[#f8fafc]">
      <div className="p-15">
        <div id=" section 1">
          <div className="grid grid-cols-1 md:grid-cols-3 ">
            <div className="card bg-base-100 w-full shadow-lg col-span-1 ">
              <figure className="px-10 pt-10">
                <img
                  src={picture}
                  alt="Shoes"
                  className="rounded-full h-[20vh] w-[20vh]"
                />
              </figure>
              <div className="card-body items-center text-center">
                <h2 className="card-title">{name}</h2>
                <p
                  className={`badge rounded-full text-white text-lg p-4 ${
                    status === "Overdue"
                      ? "bg-red-500"
                      : status === "Almost Due"
                        ? "bg-yellow-500"
                        : status === "On-Track"
                          ? "bg-forest-green"
                          : "bg-gray-400"
                  }
                 `}
                >
                  {status}
                </p>
                <div className="flex gap-2 ">
                  {tags.map((tag, i) => (
                    <p
                      className="badge bg-[#cbfadb] rounded-full text-sm font-semibold p-4 "
                      key={i}
                    >
                      {tag.toUpperCase()}
                    </p>
                  ))}
                </div>
                <p className="italic">"{bio}"</p>
                <p>Preferred: {email}</p>
              </div>
            </div>
            <div className="col-span-2 grid md:grid-rows-2">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-5 p-4 pt-0">
                <div className="p-7 flex flex-col justify-center items-center space-y-3 rounded-2xl bg-white gray shadow-lg">
                  <h2 className="text-2xl font-semibold forest-green">
                    {days_since_contact}
                  </h2>
                  <p>Days Since Contact</p>
                </div>
                <div className="p-7 flex flex-col justify-center items-center space-y-3 rounded-2xl bg-white gray shadow-lg">
                  <h2 className="text-2xl font-semibold forest-green">
                    {goal}
                  </h2>
                  <p>Goal (Days)</p>
                </div>
                <div className="p-7 flex flex-col justify-center items-center space-y-3 rounded-2xl bg-white gray shadow-lg">
                  <h2 className="text-2xl font-semibold forest-green">
                    {new Date(next_due_date).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </h2>
                  <p>Next Due</p>
                </div>
              </div>
              <div className="bg-white rounded-2xl mx-4 grid grid-rows-2 p-5 shadow-lg">
                <div className="flex justify-between items-center ">
                  <h2 className="text-3xl forest-green">Relationship Goal</h2>
                  <button className="btn   border"> Edit</button>
                </div>
                <div>
                  <h2 className="text-xl gray">
                    Connect every{" "}
                    <span className="font-bold text-black">
                      {expectedFriend.goal} days
                    </span>
                  </h2>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          id="section 2 "
          className="my-4 "
        >
          <div className="grid grid-cols-1 md:grid-cols-3 ">
            <div className="col-span-1 space-y-2">
              <div className="bg-white rounded-lg p-3 flex justify-center items-center shadow-lg">
                <h2 className="flex justify-center items-center gap-1 ">
                  <RiNotificationSnoozeLine /> Snooze 2 weeks
                </h2>
              </div>
              <div className="bg-white rounded-lg p-3 flex justify-center items-center shadow-lg">
                <h2 className="flex justify-center items-center gap-1 ">
                  <FiArchive />
                  Archive
                </h2>
              </div>
              <div className="bg-white rounded-lg p-3 flex justify-center items-center text-red-500 shadow-lg">
                <h2 className="flex justify-center items-center gap-1 ">
                  <FaRegTrashAlt /> Delete
                </h2>
              </div>
            </div>
            <div className="col-span-2 p-8 bg-white mx-4 rounded-xl grid grid-row-3 shadow-lg">
              <h2 className="row-span-1 forest-green text-lg font-semibold mb-1">
                Quick Check-In
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 row-span-2 gap-2">
                <div
                  onClick={() => handleCall(expectedFriend)}
                  className="bg-[#e9f1f8] rounded-lg flex justify-center items-center inset-shadow-sm inset-shadow-gray-500"
                >
                  <p className="flex flex-col justify-center items-center gap-2">
                    {" "}
                    <FiPhoneCall />
                    Call
                  </p>
                </div>
                <div
                  onClick={() => handleText(expectedFriend)}
                  className="bg-[#e9f1f8] rounded-lg flex flex-col justify-center items-center inset-shadow-sm inset-shadow-gray-500"
                >
                  <p className="flex flex-col justify-center items-center gap-2">
                    <MdOutlineTextsms />
                    Text
                  </p>
                </div>
                <div
                  onClick={() => handleVideo(expectedFriend)}
                  className="bg-[#e9f1f8] rounded-lg flex justify-center items-center inset-shadow-sm inset-shadow-gray-500 p"
                >
                  <p className="flex flex-col justify-center items-center gap-2 py-2">
                    <FiVideo />
                    Video
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FriendDetails;
