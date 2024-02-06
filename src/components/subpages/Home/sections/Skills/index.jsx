import React from "react";
import { technologies } from "@/utils/data";
import BallCanvas from "../canvas/BallCanvas";
const Skills = () => {
  return (
    <section className="bg-secondary-3 py-12" id="skills">
      <div className="flex flex-col items-center text-center">
        <h2 className="section-title before:content-portfolio relative before:absolute before:opacity-40 before:-top-[2rem] before:-left-3/4 before:hidden before:lg:block">
          My Skills
        </h2>
        <p className="subtitle">
          Everyday I am trying to learn something new & Explore different
          something new which is getting fit to the technology domain.
        </p>
      </div>
      <div className="container mx-auto">
        <div className="flex flex-row flex-wrap justify-center gap-10">
          {technologies?.map((technology) => (
            <div className="w-28 h-28" key={technology.name}>
              <BallCanvas icon={technology?.icon?.src} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
