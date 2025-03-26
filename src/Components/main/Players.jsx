import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import Player from "./Player";

const Players = () => {
  const [players, setPlayers] = useState([]);
  useEffect(() => {
    fetch("players.json")
      .then((res) => res.json())
      .then((data) => setPlayers(data));
  }, []);
  return (
    <div className="container mx-auto my-10">
      <div className="  flex justify-between">
        <h1 className="text-3xl font-bold">Available Players</h1>
        <div>
          <button className="btn hover:bg-[#E7FE29] rounded-l-lg">
            Available
          </button>
          <button className="btn hover:bg-[#E7FE29] rounded-r-lg">
            Selected
          </button>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {players.map((player) => (
          <Player key={player.playerId} player={player}></Player>
        ))}
      </div>
    </div>
  );
};

Players.propTypes = {};

export default Players;
