import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Tilt from "react-parallax-tilt";
import { fadeIn } from "@/utils/motion";
import github from "/public/assets/github.png";

const SingleProject = ({
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
}) => {
  const [scale, setScale] = useState(1.15);
  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
      <div className="bg-primary-2 p-5 rounded-2xl sm:w-[360px] w-full">
        <Tilt scale={scale} transitionSpeed={2500}>
          <div className="relative w-full h-[230px]">
            <Image
              src={image}
              alt="logo"
              className="w-full h-full object-cover rounded-2xl "
            />

            <div className="absolute inset-0 flex justify-end m-3 card-img_hover">
              <div
                onClick={() => window.open(source_code_link, "_blank")}
                className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
              >
                <Image
                  src={github}
                  alt="logo"
                  className="w-1/2 h-1/2 object-cover"
                />
              </div>
            </div>
          </div>

          <div className="mt-5">
            <h3 className="text-white font-bold text-[24px]">{name}</h3>
            <p className="mt-2 text-white text-[14px]">{description}</p>
          </div>

          <div className="mt-4 flex flex-wrap gap-2">
            {tags?.map((tag) => (
              <p
                key={`${name}-${tag.name}`}
                className={`text-[14px] ${tag.color}`}
              >
                #{tag.name}
              </p>
            ))}
          </div>
        </Tilt>
      </div>
    </motion.div>
  );
};

export default SingleProject;
