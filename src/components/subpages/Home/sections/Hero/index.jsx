import { Button } from "@/components/reusable";
import React from "react";
import { Shapes } from "./Shapes";

const Hero = () => {
  return (
    <div className="hero-bg z-10 relative">
      <section
        id="home"
        className="hero-main-bg h-[100vh] lg:h-[85vh] flex justify-center items-center bg-primary lg:bg-cover bg-center bg-no-repeat "
      >
        <div className="container relative ">
          <div className="flex justify-center items-center flex-col-reverse lg:flex-row">
            <div className="flex-1 flex flex-col items-center lg:items-start">
              <div className="flex flex-row items-center py-[6px] px-4 bg-discount-gradient rounded-[10px]  mb-[22px]">
                <p className="text-xl 2xsm:text-2xl text-md  text-white">
                  Hey, I am Hasan Rifat! 👋
                </p>
              </div>
              <h1 className="text-gradient font-primary text-3xl 2xsm:text-4xl leading-[44px] md:text-5xl md:leading-tight lg:text-5xl xl:text-6xl 2xl:text-7xl lg:leading-[1.2] font-bold md:tracking-[-2px] xl:">
                I Build & Develop <br /> Web Applications.
              </h1>
              <p className="pt-4 pb-8 md:pt-6 md:pb-2 lg:pb-10 max-w-[480px] text-base sm:text-lg text-center lg:text-left text-white">
                Lorem ipsum dolor sit amet consectetur adipisicing illo ad
                labore dolor elit.
              </p>
              <Button text="Download Resume" />
            </div>
            {/* gradient start */}
            <div className="absolute z-[0] w-[20%] h-[25%] top-0 pink__gradient" />
            <div className="absolute z-[1] w-[50%] h-[50%] rounded-full top-full white__gradient bottom-40" />
            <div className="absolute z-[0] w-[30%] h-[30%] right-10 bottom-0 blue__gradient" />
            {/* gradient end */}
            {/* gradient start */}
            {/* <div className="absolute z-[0] w-[20%] h-[25%] top-10 pink__gradient" /> */}
            <div className="absolute z-[1] w-[50%] h-[50%] rounded-full top-0 white__gradient bottom-40" />
            <div className="absolute z-[0] w-[30%] h-[30%] left-0 top-0 blue__gradient" />
            {/* gradient end */}
            <div className="w-full h-full md:w-2/3 md:h-2/3 lg:w-1/2 lg:h-1/2 ml-10 ">
              <Shapes />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;
