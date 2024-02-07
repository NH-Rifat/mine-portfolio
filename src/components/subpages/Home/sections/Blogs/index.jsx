import React from "react";
import BlogNav from "./BlogNav";

const Blogs = () => {
  return (
    <section id="blogs" className="section bg-secondary-3 ">
      <div className="container mx-auto">
        <div className="flex flex-col items-center text-center">
          <h2 className="section-title before:content-blogs  relative before:absolute before:opacity-10 before:-top-[2rem] before:-left-1/2 before:hidden before:lg:block">
            My Blogs
          </h2>
          <p className="subtitle py-3">
            Following projects showcases my skills and experience through
            real-world examples of my work.
          </p>
        </div>
        <div className="">
          <BlogNav />
        </div>
      </div>
    </section>
  );
};

export default Blogs;
