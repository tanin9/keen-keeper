import { useContext } from "react";
import { Legend, Pie, PieChart, Tooltip } from "recharts";
import { FriendContext } from "../../context/FriendProvider";

const Dashboard = () => {
  const { storedFriend } = useContext(FriendContext);
  const { storedFriendText } = useContext(FriendContext);

  const { storedFriendVideo } = useContext(FriendContext);

  const data = [
    { name: "Text", value: storedFriendText.length, fill: "#7f37f5" },
    { name: "Call", value: storedFriend.length, fill: "#244d3f" },
    { name: "Video", value: storedFriendVideo.length, fill: "#37a163" },
  ];
  const availableData =
    storedFriend.length > 0 ||
    storedFriendText.length > 0 ||
    storedFriendVideo > 0;
  return (
    <div className="container mx-auto pb-20 bg-[#f8fafc] ">
      <div className="font-bold text-4xl  py-10">
        <h1 className="px-20">Friendship Analytics</h1>
      </div>
      <div className=" rounded-lg  bg-white mx-29 pb-3">
        <div className="p-7 text-lg forest-green">
          {" "}
          <p>By Interaction Type</p>
        </div>

        <div className="flex justify-center ">
          {!availableData ? (
            <p className="forest-green text-4xl py-10">
              No interactions logged yet.....
            </p>
          ) : (
            <PieChart
              style={{
                width: "100%",
                maxWidth: "500px",
                maxHeight: "50vh",
                aspectRatio: 1,
              }}
              responsive
            >
              <Pie
                data={data}
                innerRadius="85%"
                outerRadius="100%"
                // Corner radius is the rounded edge of each pie slice
                cornerRadius="50%"
                fill="#8884d8"
                // padding angle is the gap between each pie slice
                paddingAngle={5}
                dataKey="value"
                isAnimationActive={true}
              />
              <Legend  />
              <Tooltip />
            </PieChart>
          )}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
