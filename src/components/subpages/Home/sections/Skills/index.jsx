import React from "react";
import { technologies } from "@/utils/data";
import BallCanvas from "../canvas/BallCanvas";
const Skills = () => {
  return (
    <section className="bg-secondary-3 py-20 relative" id="skills">
      <div className="flex flex-col items-center text-center">
        <h2 className="section-title before:content-skills relative before:absolute before:opacity-10 before:-top-[2rem] before:-left-3/4 before:hidden before:xsm:block">
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
      {/* gradient start */}
      <div className="absolute z-[1] w-[30%] h-[30%] rounded-full top-0 right-[10%] white__gradient bottom-40" />
      <div className="absolute z-[0] w-[20%] h-[20%] left-[35%] top-16 blue__gradient" />
      {/* gradient end */}
    </section>
  );
};

export default Skills;
