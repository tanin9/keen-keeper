import React, { useContext } from 'react';
import { FriendContext } from '../../context/FriendProvider';
 

const Timeline = () => {
   const { storedFriend, storedFriendText, storedFriendVideo } =
     useContext(FriendContext);
   console.log( storedFriend, storedFriendText, storedFriendVideo,  "friendContext");

    return (
      <div className="container mx-auto">
        <div>
          <div className="my-5">
            <h2 className="font-bold text-4xl">Timeline</h2>
                </div>
                <div>Call list:{storedFriend.length}</div>
                <div>Text list:{storedFriendText.length}</div>
                <div>Video Call list:{storedFriendVideo.length}</div>
        </div>
      </div>
    );
};

export default Timeline;