import React from "react";
import Header from "../components/Header";
import HomeImg from "../assets/homeimg.png";
import Button from "../components/Button";
import Projects from "../components/ProjectConfig";
import ProjectCard from "../components/ProjectCard";
import { Link } from "react-scroll";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <>
    <Header />
    <div name="home" className="h-[650px] w-full bg-gradient-to-b from-[#161c29] to-[#6f84a8] inset-0 relative">
      <div className="absolute text-[#f8fafc] flex justify-evenly items-center inset-0 px-50">
        <div>
          <h1 className="text-3xl font-extrabold">Welcome to React Ready</h1>
          <p className="mt-4 font-bold">
            Collection of React Mini Projects – a beginner-friendly space to build, learn, and grow with React!
          </p>
          <Link to="projects" smooth={true} duration={500}>
            <Button btnText="Explore Projects" icon="arrow" />
          </Link>
        </div>
        <div>
          <img src={HomeImg} alt="Home" className="w-[420px]" />
        </div>
      </div>
    </div>
    <div name="projects" className="bg-gray-900 py-10">
      <h3 className="text-2xl font-bold text-center text-white">React Projects</h3>
    <div className="flex flex-wrap justify-center items-center gap-4 mt-5">
      {Projects.map((project, i)=> {
        const {title, image, description, technologies, github, liveDemo} = project;
        return <ProjectCard key={i} title={title} image={image} description={description} techStack={technologies} liveDemo={liveDemo} github={github} />
      })}
    </div>
    </div>
    <Footer />
    </>
  );
};

export default Home;
