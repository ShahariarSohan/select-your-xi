import React from "react";
import PropTypes from "prop-types";
import { IoPerson } from "react-icons/io5";
import { FaFlag } from "react-icons/fa6";
import { FaDollarSign } from "react-icons/fa";
const Player = ({ player, handleChoosePlayer }) => {
  const {
    playerId,
    name,
    image,
    country,
    role,
    battingType,
    bowlingType,
    biddingPrice,
    rating,
  } = player;
  return (
    <div>
      <div class="card bg-base-100  shadow-sm p-5 space-y-3 border border-base-200">
        <div>
          <img
            className="  rounded-md"
            src={image}
            alt="player"
            class="rounded-xl"
          />
        </div>
        <div>
          <div
            className="
            flex items-center gap-5"
          >
            <IoPerson className="text-xl" />
            <h2 className="font-bold">{name}</h2>
          </div>
        </div>
        <div className="flex items-center justify-between text-sm">
          <div className="flex items-center gap-2">
            <FaFlag />
            <p>{country}</p>
          </div>
          <div className="bg-base-300 px-4 py-2 rounded-sm ">{role}</div>
        </div>
        <h3 className="text-sm">Rating :{rating}</h3>
        <div className="text-sm font-bold flex items-center justify-between">
          <p>{battingType}</p>
          <p>{bowlingType ? bowlingType : ""}</p>
        </div>
        <div className="flex items-center justify-between">
          <p className=" flex items-center ">
            Price: <FaDollarSign />
            <span className="font-bold">{biddingPrice}</span>
          </p>
          <button
            className="btn font-normal"
            onClick={() => handleChoosePlayer(player, playerId)}
          >
            Choose Player
          </button>
        </div>
      </div>
    </div>
  );
};

Player.propTypes = {
  player: PropTypes.object.isRequired,
  handleChoosePlayer: PropTypes.func.isRequired,
};

export default Player;
