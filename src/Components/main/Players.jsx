import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import Player from "./Player";
import Selected from "./Selected";

const Players = () => {
  const [players, setPlayers] = useState([]);
  useEffect(() => {
    fetch("players.json")
      .then((res) => res.json())
      .then((data) => setPlayers(data));
  }, []);
  const [showComponent, setShowComponent] = useState(true);
  const handleComponent = (value) => {
    setShowComponent(value);
  };
  return (
    <div className="container mx-auto my-10">
      <div className="  flex justify-between">
        <h1 className="text-3xl font-bold">Available Players</h1>
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
            Selected
          </button>
        </div>
      </div>
      {showComponent ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {players.map((player) => (
            <Player key={player.playerId} player={player}></Player>
          ))}
        </div>
      ) : (
        <Selected></Selected>
      )}
    </div>
  );
};

Players.propTypes = {};

export default Players;
