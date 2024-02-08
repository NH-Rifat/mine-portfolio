import { navigation } from "@/utils/data";
import React from "react";
import { Link } from "react-scroll";
import { motion } from "framer-motion";

const Nav = () => {
  return (
    <nav>
      <ul className="flex space-x-8 capitalize text-[15px]">
        {navigation?.map((item, idx) => {
          return (
            <li
              className="text-white hover:text-dimWhite cursor-pointer"
              key={idx}
            >
              <motion.div whileHover={{ scale: 1.2 }}>
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
              </motion.div>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Nav;
