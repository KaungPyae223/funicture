import React from "react";
import { motion } from "framer-motion";
import {
  HeadingImage,
  HeadingTitleAnimation,
} from "../../Animate/HomeAnimate.js";

const Header = () => {
  return (
    <div className="w-full h-[100vh] relative">
      <motion.img
        variants={HeadingImage}
        initial={"initial"}
        animate={"enter"}
        src={
          "https://images.unsplash.com/photo-1544928147-79a2dbc1f389?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        }
        className="w-full h-[100vh] object-cover object-center"
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
            About Alex Furniture Company
          </motion.p>
        </div>
      </div>
    </div>
  );
};

export default Header;
