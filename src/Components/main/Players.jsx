import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import Player from "./Player";
import Selected from "./Selected";

import { ToastContainer, toast } from "react-toastify";

const Players = ({ coin }) => {
  // player data load and set player
  const [players, setPlayers] = useState([]);
  useEffect(() => {
    fetch("players.json")
      .then((res) => res.json())
      .then((data) => setPlayers(data));
  }, []);
  // display Component
  const [showComponent, setShowComponent] = useState(true);
  const handleComponent = (value) => {
    setShowComponent(value);
  };
  // select player
  const [choosePlayers, setChoosePlayers] = useState([]);
  const handleChoosePlayer = (player, id) => {
    if (coin <= 0) {
      return toast.error("You have no balance");
    } else {
      const isExist = choosePlayers.find((player) => player.playerId === id);
      if (!isExist) {
        setChoosePlayers([...choosePlayers, player]);
        toast.success("Player successfully added");
      } else {
        return toast.error("This player already exist");
      }
    }
  };
  const handleRemove = (id) => {
    const remainingPlayers = choosePlayers.filter(
      (player) => player.playerId !== id
    );
    setChoosePlayers(remainingPlayers);
    toast.error("Player successfully removed");
  };
  return (
    <div className="container mx-auto my-10">
      <div className="  flex justify-between">
        <h1 className="text-2xl font-bold">
          {showComponent
            ? `Available Players`
            : `Selected Players (${choosePlayers.length}/10)`}
        </h1>
        <div className="flex flex-col gap-5 md:gap-0 md:flex-row items-center gap">
          <button
            className="btn hover:bg-[#E7FE29] md:rounded-l-lg"
            onClick={() => handleComponent(true)}
          >
            Available
          </button>
          <button
            className="btn hover:bg-[#E7FE29] md:rounded-r-lg"
            onClick={() => handleComponent(false)}
          >
            Selected({choosePlayers.length})
          </button>
        </div>
      </div>
      {showComponent ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-10">
          {players.map((player) => (
            <Player
              key={player.playerId}
              player={player}
              handleChoosePlayer={handleChoosePlayer}
            ></Player>
          ))}
        </div>
      ) : (
        <Selected
          choosePlayers={choosePlayers}
          handleRemove={handleRemove}
        ></Selected>
      )}
      <ToastContainer position="top-center" />
    </div>
  );
};

Players.propTypes = {};

export default Players;
