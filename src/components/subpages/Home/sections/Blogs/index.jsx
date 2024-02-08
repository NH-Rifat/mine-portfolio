import React from "react";
import BlogNav from "./BlogNav";

const Blogs = () => {
  return (
    <section id="blogs" className="section bg-secondary-3 relative">
      <div className="container mx-auto">
        <div className="flex flex-col items-center text-center">
          <h2 className="section-title before:content-blogs  relative before:absolute before:opacity-10 before:-top-[2rem] before:-left-1/2 before:hidden before:2xsm:block">
            My Blogs
          </h2>
          <p className="subtitle">
            Following projects showcases my skills and experience through
            real-world examples of my work.
          </p>
        </div>
        <div className="">
          <BlogNav />
        </div>
      </div>
      {/* gradient start */}
      {/* <div className="absolute z-[0] w-[20%] h-[25%] top-10 pink__gradient" /> */}
      <div className="absolute z-[1] w-[30%] h-[30%] rounded-full top-1/2 left-[30%] white__gradient bottom-40" />
      <div className="absolute z-[0] w-[20%] h-[20%] left-[30%] top-1/2 blue__gradient" />
      {/* gradient end */}
      {/* gradient start */}
      {/* <div className="absolute z-[0] w-[20%] h-[25%] top-10 pink__gradient" /> */}
      <div className="absolute z-[1] w-[30%] h-[30%] rounded-full top-0 right-[10%] white__gradient bottom-40" />
      <div className="absolute z-[0] w-[20%] h-[20%] left-[35%] top-16 blue__gradient" />
      {/* gradient end */}
    </section>
  );
};

export default Blogs;
