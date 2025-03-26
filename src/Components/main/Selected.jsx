import React from "react";
import PropTypes from "prop-types";
import ShowSelected from "./ShowSelected";

const Selected = ({ choosePlayers }) => {
  return (
    <div>
      <div className="space-y-10 my-10">
        {choosePlayers.map((choosePlayer) => (
          <ShowSelected
            key={choosePlayer.playerId}
            choosePlayer={choosePlayer}
          ></ShowSelected>
        ))}
      </div>
    </div>
  );
};

Selected.propTypes = {};

export default Selected;
