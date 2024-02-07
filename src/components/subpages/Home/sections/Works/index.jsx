import React from "react";
import { projectsData } from "@/utils/data";
import SingleProject from "./SingleProject";

const Works = () => {
  return (
    <>
      <section id="portfolio" className="section bg-secondary-2 min-h-[1400px]">
        <div className="container mx-auto">
          <div className="flex flex-col items-center text-center">
            <h2 className="section-title before:content-portfolio  relative before:absolute before:opacity-40 before:-top-[2rem] before:-left-3/4 before:hidden before:lg:block">
              My latest work
            </h2>
            <p className="subtitle">
              Following projects showcases my skills and experience through
              real-world examples of my work. Each project is briefly described
              with links to code repositories and live demos in it. It reflects
              my ability to solve complex problems, work with different
              technologies, and manage projects effectively.
            </p>
          </div>
          <section className="grid gap-y-12 4xsm:grid-cols-1 sm:grid-cols-1 md:grid-cols-2 md:gap-x-12 lg:grid-cols-2 xl:grid-cols-3 lg:gap-x-0 lg:gap-y-12 3xl:grid-cols-4 xl:gap-x-5 2xl:gap-x-0">
            {projectsData?.map((item, index) => {
              return <SingleProject index={index} {...item} key={item.id} />;
            })}
          </section>
        </div>
      </section>
    </>
  );
};

export default Works;
