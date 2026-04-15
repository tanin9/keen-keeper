import React from "react";
import { Link } from "react-router";

const FriendCards = ({ friend }) => {
  return (
    <Link
      to={`/friendDetails/${friend.id}`}
      className="card bg-base-100 gap-5 w-fitt shadow-sm grid grid-col-4"
    >
      <figure className="px-10 pt-10">
        <img
          src={friend.picture}
          alt={friend.name}
          className="rounded-full h-40  "
        />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title">{friend.name}</h2>
        <p className="gray">{friend.days_since_contact}d ago</p>
        <div className="flex gap-2 ">
          {friend.tags.map((tag, i) => (
            <p
              className="badge bg-success rounded-full text-lg p-3 "
              key={i}
            >
              {tag}
            </p>
          ))}
        </div>
        <p
          className={`badge rounded-full text-white text-lg p-3 ${
            friend.status === "overdue"
              ? "bg-red-500"
              : friend.status === "almost due"
                ? "bg-yellow-500"
                : friend.status === "on track"
                  ? "bg-forest-green"
                  : "bg-gray-400"
          }
                 `}
        >
          {friend.status}
        </p>
      </div>
    </Link>
  );
};

export default FriendCards;
