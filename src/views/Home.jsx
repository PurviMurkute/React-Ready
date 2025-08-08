import React from "react";
import Header from "../components/Header";
import HomeImg from "../assets/homeimg.png";
import Button from "../components/Button";

const Home = () => {
  return (
    <div className="h-[650px] w-full bg-gradient-to-b from-[#0f172a] to-[#354258] inset-0 relative">
      <Header />
      <div className="absolute text-[#f8fafc] flex justify-evenly items-center inset-0 px-50">
        <div>
          <h1 className="text-3xl font-extrabold">Welcome to React Ready</h1>
          <p className="mt-4 font-bold">
            Collection of React Mini Projects – a beginner-friendly space to build, learn, and grow with React!
          </p>
          <Button btnText="Explore Projects" icon="arrow" />
        </div>
        <div>
          <img src={HomeImg} alt="Home" className="w-[420px]" />
        </div>
      </div>
    </div>
  );
};

export default Home;
