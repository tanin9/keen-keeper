import React, { createContext, useState } from 'react';
import { toast } from 'react-toastify';

export const FriendContext = createContext();
const FriendProvider = ({children}) => {
    
    
  const [storedFriend, setStoredFriend] = useState([]);
 

  const handleCall = (currentFriend) => {
    const isFriendExist = storedFriend.find(
      (friendData) => friendData.id == currentFriend.id,
    );

    if (!isFriendExist) {
    
        setStoredFriend([...storedFriend, currentFriend]);
       toast.success(`Call with ${currentFriend.name}.`);
    }
    console.log(currentFriend, storedFriend, "friend");
    };
     const [storedFriendText, setStoredFriendText] = useState([]);

     const handleText = (currentFriend) => {
       const isFriendExistText = storedFriendText.find(
         (friendData) => friendData.id == currentFriend.id,
       );

       if (!isFriendExistText) {
         
         setStoredFriendText([...storedFriendText, currentFriend]);
         toast.success(`Text with ${currentFriend.name}`);
       }
       console.log(currentFriend, storedFriendText, "friend");
     };
     const [storedFriendVideo, setStoredFriendVideo] = useState([]);

     const handleVideo = (currentFriend) => {
       const isFriendExistVideo = storedFriendVideo.find(
         (friendData) => friendData.id == currentFriend.id,
       );

       if (!isFriendExistVideo) {
      
         setStoredFriendVideo([...storedFriendVideo, currentFriend]);
         toast.success(`Video with ${currentFriend.name}`);
       }
       console.log(currentFriend, storedFriendVideo, "friend");
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
    return <FriendContext.Provider value={data} >{children}</FriendContext.Provider>;
};

export default FriendProvider;