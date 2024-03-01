import React from "react";
import { motion } from "framer-motion";
import {
  HeadingTitleAnimation,
  HeadingImage,
} from "../../Animate/HomeAnimate.js";

import FunictureHeader from "../../Images/Funicture Header.jpg";
const Header = () => {
  return (
    <div className="w-full h-[100vh] relative">
      <motion.img
        variants={HeadingImage}
        initial={"initial"}
        animate={"enter"}
        src={FunictureHeader}
        className="w-full h-[100vh] object-cover object-bottom"
      />
      <div className="absolute top-0 left-0 w-full h-[100vh] flex justify-start items-start">
        <div>
          <motion.p
            className="w-fit text-[2.5rem] font-bold text-gray-900 bg-white pt-5 pb-3 px-11 RoundedRightEnd"
            initial={"initial"}
            whileInView={"enter"}
            viewport={{ once: true }}
            custom={0}
            variants={HeadingTitleAnimation}
          >
            Make Your Home More Attractive and Confort
          </motion.p>
          <motion.p
            className="text-2xl p-3 pt-0 font-medium text-gray-900 bg-white px-11 w-fit RoundedRightEnd"
            initial={"initial"}
            whileInView={"enter"}
            viewport={{ once: true }}
            custom={1}
            variants={HeadingTitleAnimation}
          >
            Alexa The Best Furniture Website to Choose
          </motion.p>
          <motion.div
            className="px-11 bg-white RoundedRightEnd w-1/3 text-justify py-5"
            initial={"initial"}
            whileInView={"enter"}
            viewport={{ once: true }}
            custom={2}
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
