import React from "react";
import Newsletter from "./Newsletter";

const Footer = () => {
  return (
    <div className="bg-gray-950 relative mt-32">
      <Newsletter></Newsletter>
      <div className="pt-40">
        <img className=" mx-auto" src="./images/logo-footer.png" alt="" />
      </div>
      <div className="flex flex-col md:flex-row  gap-5 md:justify-between  md:items-start  container mx-auto text-white p-10 md:py-16">
        <ul className="text-sm space-y-3 font-light">
          <p className="font-bold">About Us</p>
          <li>
            We are a passionate team <br /> dedicated to providing the best{" "}
            <br />
            services to our customers.
          </li>
        </ul>
        <ul className="text-sm space-y-3 font-light">
          <p className="font-bold">Quick Links</p>
          <li>Home</li>
          <li>Service</li>
          <li>About</li>
          <li>Content</li>
        </ul>
        <ul className="text-sm space-y-3 font-light">
          <p className="font-bold">Subscribe</p>
          <li>
            Subscriber to our Newsletter for the
            <br />
            latest updates
          </li>
          <div className="join">
            <input
              className="input  rounded-l-full w-full"
              placeholder="Enter your email"
            />
            <button className="btn  rounded-r-full bg-[#E7FE29]">
              Subscribe
            </button>
          </div>
        </ul>
      </div>
      <hr className="h-1 container mx-auto text-gray-600 pb-16" />
      <p className="text-center text-white text-sm font-light py-5">
        @2024 Your Company All Rights Reserved.
      </p>
    </div>
  );
};

export default Footer;
