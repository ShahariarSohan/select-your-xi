import React from "react";
import { MdDeleteForever } from "react-icons/md";
import PropTypes from "prop-types";
import { FaDollarSign } from "react-icons/fa6";

const ShowSelected = ({ choosePlayer }) => {
  const { image, name, role, biddingPrice } = choosePlayer;
  return (
    <div className="flex items-center justify-between p-5 bg-base-200 shadow-sm rounded-md">
      <div className="flex items-center gap-5">
        <div>
          <img className="w-20 h-20 rounded-md" src={image} alt="" />
        </div>
        <div>
          <h2 className="text-2xl font-bold">{name}</h2>
          <p>{role}</p>
          <p className="flex items-center">
            Price: <FaDollarSign />
            <span className="font-bold">{biddingPrice}</span>
          </p>
        </div>
      </div>
      <button className=" text-red-600 text-3xl">
        <MdDeleteForever />
      </button>
    </div>
  );
};

ShowSelected.propTypes = {};

export default ShowSelected;
