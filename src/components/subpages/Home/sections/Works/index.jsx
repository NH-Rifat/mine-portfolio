import React, { useState } from "react";
import { projectsData } from "@/utils/data";
import SingleProject from "./SingleProject";
import { motion } from "framer-motion";

import Project1 from "/public/assets/projects/carrent.png";
import Project2 from "/public/assets/projects/car_manufacture.jpg";
import Project3 from "/public/assets/projects/todo_.jpg";
import Project4 from "/public/assets/projects/travel.jpg";
import Project5 from "/public/assets/projects/book-01.jpg";
// import Project6 from "/public/assets/projects/shopping-01.jpg";

const Works = () => {
  const [positionIndexes, setPositionIndexes] = useState([0, 1, 2, 3, 4]);

  const handleNext = () => {
    setPositionIndexes((prevIndexes) => {
      const updatedIndexes = prevIndexes.map(
        (prevIndex) => (prevIndex + 1) % 5
      );
      return updatedIndexes;
    });
  };

  const handleBack = () => {
    setPositionIndexes((prevIndexes) => {
      const updatedIndexes = prevIndexes.map(
        (prevIndex) => (prevIndex + 4) % 5
      );

      return updatedIndexes;
    });
  };

  const images = [Project1, Project2, Project3, Project4, Project5];

  const positions = ["center", "left1", "left", "right", "right1"];

  const imageVariants = {
    center: { x: "0%", scale: 1, zIndex: 5 },
    left1: { x: "-50%", scale: 0.7, zIndex: 3 },
    left: { x: "-90%", scale: 0.5, zIndex: 2 },
    right: { x: "90%", scale: 0.5, zIndex: 1 },
    right1: { x: "50%", scale: 0.7, zIndex: 3 },
  };

  return (
    <>
      <section id="portfolio" className="section bg-secondary-2  relative">
        <div className="container mx-auto">
          <div className="flex flex-col items-center text-center">
            <h2 className="section-title before:content-portfolio  relative before:absolute before:opacity-40 before:-top-[2rem]  before:-left-[108%] before:lg:-left-3/4  before:hidden before:sm:block">
              My latest work
            </h2>
            <p className="subtitle ">
              Following projects showcases my skills and experience through
              real-world examples of my work. Each project is briefly described
              with links to code repositories and live demos in it. It reflects
              my ability to solve complex problems, work with different
              technologies, and manage projects effectively.
            </p>
          </div>
          {/* gradient start */}
          <div className="absolute z-[1] w-[30%] h-[30%] rounded-full top-0 white__gradient bottom-40" />
          <div className="absolute z-[0] w-[20%] h-[20%] left-10 top-0 blue__gradient" />
          {/* gradient end */}
          <section className="grid gap-y-12 4xsm:grid-cols-1 sm:grid-cols-1 md:grid-cols-2 md:gap-x-12 lg:grid-cols-2 xl:grid-cols-3 lg:gap-x-0 lg:gap-y-12 3xl:grid-cols-4 xl:gap-x-5 2xl:gap-x-0">
            {projectsData?.map((item, index) => {
              return <SingleProject index={index} {...item} key={item.id} />;
            })}
          </section>
          {/* <div className="flex items-center flex-col justify-center h-screen">
            {images.map((image, index) => (
              <motion.img
                key={index}
                src={image?.src || image}
                alt={image}
                className="rounded-[12px]"
                initial="center"
                animate={positions[positionIndexes[index]]}
                variants={imageVariants}
                transition={{ duration: 0.5 }}
                style={{ width: "40%", position: "absolute" }}
              />
            ))}
            <div className="flex flex-row gap-3 mt-72">
              <button
                className="text-white mt-[400px] bg-indigo-400 rounded-md py-2 px-4"
                onClick={handleBack}
              >
                Back
              </button>
              <button
                className="text-white mt-[400px] bg-indigo-400 rounded-md py-2 px-4"
                onClick={handleNext}
              >
                Next
              </button>
            </div>
          </div> */}
        </div>
      </section>
    </>
  );
};

export default Works;
