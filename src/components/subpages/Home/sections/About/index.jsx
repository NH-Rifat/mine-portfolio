import React from "react";
import aboutIMage from "/public/assets/about/about.svg";
import Image from "next/image";

const About = () => {
  return (
    <div>
      <section className="section bg-secondary-2" id="about">
        <div className="container mx-auto">
          <div className="flex flex-col xl:flex-row gap-24 items-center">
            <Image
              src={aboutIMage}
              alt="logo"
              className="object-cover h-full w-[566px] md:mx-auto lg:mx-0 rounded-2xl"
            />
            <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
              <div className="flex flex-col">
                <h2 className="text-3xl lg:text-4xl font-medium lg:font-extrabold mb-3 before:content-about relative before:absolute before:opacity-40 before:-top-[2rem] before:hidden before:lg:block">
                  Hasan Rifat
                </h2>
                <p className="mb-4 ">Junior Frontend Web Developer</p>
                <hr className="mb-8 opacity-5" />
                <p className="mb-8">
                  I will put my sincere effort to do the best in the technology
                  domain with state of art Excellency. I am hard-working in the
                  individual phase with proficiency in using different
                  technology. I am hungry to learn and determined to find core
                  engineering beauty at best. <br />
                  <br />I am a final year student of BSc in Computer Science &
                  Engineering.
                </p>
              </div>
              <button className="btn btn-md hover:bg-secondary-hover transition-all">
                Contact me
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
