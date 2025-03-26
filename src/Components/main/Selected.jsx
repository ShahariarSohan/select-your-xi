import PropTypes from "prop-types";
import ShowSelected from "./ShowSelected";

const Selected = ({ choosePlayers, handleRemove, handleComponent }) => {
  return (
    <div>
      <h1 className="text-2xl font-bold">
        {choosePlayers.length === 0 ? "No Players added yet" : ""}
      </h1>
      <div className="space-y-10 my-10">
        {choosePlayers.map((choosePlayer) => (
          <ShowSelected
            key={choosePlayer.playerId}
            choosePlayer={choosePlayer}
            handleRemove={handleRemove}
          ></ShowSelected>
        ))}
      </div>
      <button
        className="btn bg-[#E7FE29]"
        onClick={() => handleComponent(true)}
      >
        Add More Player
      </button>
    </div>
  );
};

Selected.propTypes = {
  choosePlayers: PropTypes.array.isRequired,
  handleRemove: PropTypes.func.isRequired,
  handleComponent: PropTypes.func.isRequired,
};

export default Selected;
