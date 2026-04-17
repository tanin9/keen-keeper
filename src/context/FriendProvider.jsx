import React, { createContext, useState } from "react";
import { toast } from "react-toastify";
import { getAllFromLocalDB, addToLocalDB } from "../utils/localDB";

export const FriendContext = createContext();

const FriendProvider = ({ children }) => {
  // useEffect(() => {
  //   const allFromLocalDB = getAllFromLocalDB();
  //   console.log(allFromLocalDB, "All list from local DB");
  // }, []);

  //*...................call.................... */ //

  const [storedFriend, setStoredFriend] = useState(() =>
    getAllFromLocalDB().filter((fr) => fr.type === "call"),
  );

  const handleCall = (currentFriend) => {
    const isFriendExist = storedFriend.find(
      (friendData) => friendData.id == currentFriend.id,
    );

    if (!isFriendExist) {
      const value = {
        ...currentFriend,
        type: "call",
        timestamp: new Date().toISOString(),
      };
      addToLocalDB(value);
      setStoredFriend([...storedFriend, value]);
      toast.success(`Call with ${currentFriend.name}.`, {
        position: "top-center",
      });
    }
    // console.log(currentFriend, storedFriend, "friend");
  };

  //*...................text.................... */ //

  const [storedFriendText, setStoredFriendText] = useState(() =>
    getAllFromLocalDB().filter((fr) => fr.type === "text"),
  );

  const handleText = (currentFriend) => {
    const isFriendExistText = storedFriendText.find(
      (friendData) => friendData.id == currentFriend.id,
    );

    if (!isFriendExistText) {
      const value = {
        ...currentFriend,
        type: "text",
        timestamp: new Date().toISOString(),
      };
      addToLocalDB(value);
      setStoredFriendText([...storedFriendText, value]);
      toast.success(`Text with ${currentFriend.name}`, {
        position: "top-center",
      });
    }
    // console.log(currentFriend, storedFriendText, "friend");
  };

  //*...................vedio.................... */ //

  const [storedFriendVideo, setStoredFriendVideo] = useState(() =>
    getAllFromLocalDB().filter((fr) => fr.type === "video"),
  );

  const handleVideo = (currentFriend) => {
    const isFriendExistVideo = storedFriendVideo.find(
      (friendData) => friendData.id == currentFriend.id,
    );

    if (!isFriendExistVideo) {
      const value = {
        ...currentFriend,
        type: "video",
        timestamp: new Date().toISOString(),
      };
      addToLocalDB(value);
      setStoredFriendVideo([...storedFriendVideo, value]);
      toast.success(`Video with ${currentFriend.name}`, {
        position: "top-center",
      });
    }
    // console.log(currentFriend, storedFriendVideo, "friend");
  };

  const data = {
    storedFriend,
    setStoredFriend,
    handleCall,
    storedFriendText,
    setStoredFriendText,
    handleText,
    storedFriendVideo,
    setStoredFriendVideo,
    handleVideo,
  };
  return (
    <FriendContext.Provider value={data}>{children}</FriendContext.Provider>
  );
};

export default FriendProvider;
