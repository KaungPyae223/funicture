import React from "react";
import { motion } from "framer-motion";
import {
  HeadingImage,
  HeadingTitleAnimation,
} from "../../Animate/HomeAnimate.js";
import AboutUSImg from "../../Images/AboutUs.jpg";

const Header = () => {
  return (
    <div className="w-full h-[100vh] relative">
      <motion.img
        layoutId="AboutUs"
        transition={{ duration: 0.6 }}
        src={AboutUSImg}
        className="w-full h-[100vh] object-cover object-center"
      />
      <div className="absolute top-0 left-0 w-full h-[100vh] flex justify-start items-start">
        <div>
          <motion.p
            className="w-fit text-[2.5rem] font-bold text-gray-900 bg-white pt-5 pb-3 px-11 RoundedRightEnd"
            initial={"initial"}
            whileInView={"enter"}
            viewport={{ once: true }}
            custom={1.3}
            variants={HeadingTitleAnimation}
          >
            About Alex Furniture Company
          </motion.p>
        </div>
      </div>
    </div>
  );
};

export default Header;
