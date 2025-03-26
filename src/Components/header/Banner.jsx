import React from "react";
import PropTypes from "prop-types";

const Banner = ({ handleClaimCoin }) => {
  return (
    <div className="container mx-auto  bg-[url(./images/bg-shadow.png)] flex flex-col items-center gap-5  bg-black bg-no-repeat bg-cover bg-center lg:rounded-xl py-10 text-center ">
      <div>
        <img src="./images/banner-main.png" alt="" />
      </div>
      <h1 className="text-4xl font-bold text-white">
        Assemble Your Ultimate Dream 11 Cricket Team
      </h1>
      <h3 className="text-2xl font-bold  text-slate-500">
        Beyond Boundaries Beyond Limits
      </h3>
      <button class="btn bg-[#E7FE29] text-black " onClick={handleClaimCoin}>
        Claim Free Credit
      </button>
    </div>
  );
};

Banner.propTypes = {
  handleClaimCoin: PropTypes.func,
};

export default Banner;
