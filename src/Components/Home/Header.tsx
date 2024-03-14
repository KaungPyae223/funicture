import React from "react";
import { motion } from "framer-motion";
import {
  HeadingTitleAnimation,
} from "../../Animate/HomeAnimate.js";

import HomeImg from "../../Images/Funicture Header.jpg";
const Header = () => {
  return (
    <div className="w-full h-[100vh] relative">
      <motion.img
        layoutId="Home"
        transition={{duration:0.6}}
        src={HomeImg}
        className="w-full h-[100vh] object-cover object-bottom"
      />
      <div className="absolute top-0 left-0 w-full h-[100vh] flex justify-start items-start">
        <div>
          <motion.p
            className="w-fit text-3xl md:text-[2.5rem] font-bold text-gray-900 bg-white pt-5 pb-3 px-5 md:px-11 RoundedRightEnd "
            initial={"initial"}
            whileInView={"enter"}
            viewport={{ once: true }}
            custom={1.3}
            variants={HeadingTitleAnimation}
          >
            Make Your Home More Attractive and Confort
          </motion.p>
          <motion.p
            className="md:text-2xl text-lg p-3 md:pt-0 pt-3 font-medium text-gray-900 bg-white md:px-11 px-5 lg:w-fit w-full RoundedRightEnd "
            initial={"initial"}
            whileInView={"enter"}
            viewport={{ once: true }}
            custom={2.3}
            variants={HeadingTitleAnimation}
          >
            Alexa The Best Furniture Website to Choose
          </motion.p>
          <motion.div
            className="md:px-11 px-5 bg-white RoundedRightEnd lg:w-1/3 md:2/3 w-full  text-justify py-5"
            initial={"initial"}
            whileInView={"enter"}
            viewport={{ once: true }}
            custom={3.3}
            variants={HeadingTitleAnimation}
          >
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque
              reprehenderit natus, sunt aliquam voluptatibus facilis hic
              voluptas consectetur labore beatae ipsum consequuntur, provident,
              suscipit ipsa sit. Doloremque placeat veritatis iure?
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Header;
