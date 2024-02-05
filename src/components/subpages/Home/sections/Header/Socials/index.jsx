import { social } from "@/utils/data";
import React from "react";

const Socials = () => {
  return (
    <ul className="flex space-x-6 ">
      {social?.map((item, index) => {
        return (
          <li
            className="flex justify-center items-center text-secondary"
            key={index}
          >
            <a className="text-base" href={item.href}>
              {item.icon}
            </a>
          </li>
        );
      })}
    </ul>
  );
};

export default Socials;
