import { Button } from "@/components/reusable";
import React from "react";

const Hero = () => {
  return (
    <div className="hero-bg z-10">
      <section
        id="home"
        className="hero-main-bg lg:h-[85vh] flex items-center bg-primary lg:bg-cover lg:bg-center lg:bg-no-repeat py-32 lg:py-0 overflow-hidden"
      >
        <div className="container mx-auto h-full">
          <div className="flex items-center h-full pt-8 ">
            <div className="flex-1 flex flex-col items-center lg:items-start">
              <div className="flex flex-row items-center py-[6px] px-4 bg-discount-gradient rounded-[10px]  mb-[22px]">
                <p className="text-2xl text-md  text-white">
                  Hey, I am Hasan Rifat! 👋
                </p>
              </div>
              <h1 className="text-gradient text-white text-4xl  leading-[44px] md:text-5xl md:leading-tight lg:text-7xl lg:leading-[1.2] font-bold md:tracking-[-2px]">
                I Build & Develop <br /> Web Applications.
              </h1>
              <p className="pt-4 pb-8 md:pt-6 md:pb-12 max-w-[480px] text-lg text-center lg:text-left text-white">
                Lorem ipsum dolor sit amet consectetur adipisicing illo ad
                labore dolor elit.
              </p>
              <Button text="Download Resume" />
            </div>
            {/* gradient start */}
            <div className="absolute z-[0] w-[20%] h-[25%] top-0 pink__gradient" />
            <div className="absolute z-[1] w-[50%] h-[50%] rounded-full white__gradient bottom-40" />
            <div className="absolute z-[0] w-[30%] h-[30%] right-20 bottom-20 blue__gradient" />
            {/* gradient end */}
            {/* <div className="hidden lg:flex flex-1 justify-end items-end">
            {<img width={400} className="w-50" src={WomanImg} alt="" />}
          </div> */}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;
