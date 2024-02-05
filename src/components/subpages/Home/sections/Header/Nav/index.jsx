import { navigation } from "@/utils/data";
import React from "react";
import { Link } from "react-scroll";

const Nav = () => {
  return (
    <nav>
      <ul className="flex space-x-8 capitalize text-[15px]">
        {navigation?.map((item, idx) => {
          return (
            <li
              className="text-white hover:text-accent cursor-pointer"
              key={idx}
            >
              <Link
                to={item.href}
                activeclass="active"
                spy={true}
                smooth={true}
                duration={500}
                offset={-70}
                className="transition-all duration-300"
              >
                {item.name}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Nav;
