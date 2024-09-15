import React from "react";
import handIcon from "../Assets/hand_icon.png";
import heroImage from "../Assets/hero_image.png";
import arrow from "../Assets/arrow_icon.png";

const Hero = () => {
  return (
    <div className="hero-container min-h-screen flex items-center justify-between px-20 py-16 bg-gradient-to-r from-gray-100 via-gray-500 to-gray-900">
      <div className="flex flex-col -mt-80">
        <h1 className="text-7xl font-bold space-x-9 animate-fadeIn">
          <span className="flex items-center">
            <img src={handIcon} alt="hand" className="h-32" />
            New{" "}
          </span>
          <span>collections</span>
          <br />
          <span className="block mt-4">
            for smart
            <br />
            <span className="block mt-4">gen</span>
          </span>
        </h1>
        <button className="ml-8 mr-14 bg-black text-2xl text-white hover:bg-gray-800 font-medium rounded-3xl flex items-center justify-between p-7 mt-14 transition-transform transform hover:scale-105">
          Latest Collection
          <img src={arrow} alt="arrow" className="ml-1 h-4 w-8 mr-6" />
        </button>
      </div>
      <img
        src={heroImage}
        alt="hero"
        className="h-full pl-48 -mt-10 w-full object-cover"
      />
    </div>
  );
};

export default Hero;
