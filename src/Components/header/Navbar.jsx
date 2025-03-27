import PropTypes from "prop-types";
import { ImCoinDollar } from "react-icons/im";
const Navbar = ({ coin }) => {
  return (
    <div className="flex flex-col md:flex-row justify-between items-center container mx-auto py-5">
      <div>
        <img src="./images/logo.png" alt="" />
      </div>
      <div>
        <ul className="flex flex-col md:flex-row gap-5 items-center text-slate-500">
          <li>Home</li>
          <li>Fixture</li>
          <li>Teams</li>
          <li>Schedules</li>
          <button className="btn flex items-center gap-2">
            <p className="text-sm">
              <span className="mr-1">{coin}</span>Coins
            </p>
            <ImCoinDollar className="text-xl text-yellow-600" />
          </button>
        </ul>
      </div>
    </div>
  );
};

Navbar.propTypes = {
  coin: PropTypes.number,
};
export default Navbar;
