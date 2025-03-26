import PropTypes from "prop-types";
import ShowSelected from "./ShowSelected";

const Selected = ({ choosePlayers, handleRemove }) => {
  return (
    <div>
      <div className="space-y-10 my-10">
        {choosePlayers.map((choosePlayer) => (
          <ShowSelected
            key={choosePlayer.playerId}
            choosePlayer={choosePlayer}
            handleRemove={handleRemove}
          ></ShowSelected>
        ))}
      </div>
      <button className="btn bg-[#E7FE29]">Add More Player</button>
    </div>
  );
};

Selected.propTypes = {
  choosePlayers: PropTypes.array.isRequired,
  handleRemove: PropTypes.func.isRequired,
};

export default Selected;
