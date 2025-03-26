import { ImCoinDollar } from "react-icons/im";
const Navbar = () => {
  return (
    <div className="flex flex-col md:flex-row justify-between items-center container mx-auto py-5">
      <div>
        <img src="./images/logo.png" alt="" />
      </div>
      <div>
        <ul className="grid grid-cols-3 md:grid-cols-5  items-center gap-2 text-slate-500">
          <li>Home</li>
          <li>Fixture</li>
          <li>Teams</li>
          <li>Schedules</li>
          <button className="btn flex items-center gap-3">
            <p>
              <span></span>Coins
            </p>
            <ImCoinDollar className="text-xl text-yellow-600" />
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
