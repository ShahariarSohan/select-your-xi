import React from "react";

const Newsletter = () => {
  return (
    <div className="container absolute rounded-md flex flex-col space-y-5 items-center  bg-[url(./images/bg-shadow.png)] bg-cover bg-slate-50 bg-center p-10  left-1/2 -translate-x-1/2 -translate-y-1/2 ">
      <h1 className="text-3xl font-bold">Subscribe to our Newsletter</h1>
      <p>Get the latest updates and news right in your inbox!</p>
      <div className="join">
        <input
          className="input  rounded-l-full"
          placeholder="Enter your email"
        />
        <button className="btn  rounded-r-full bg-[#E7FE29]">Subscribe</button>
      </div>
    </div>
  );
};

export default Newsletter;
