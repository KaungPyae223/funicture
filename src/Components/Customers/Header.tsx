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
        layoutId="Customer"
        transition={{ duration: 0.6 }}
        src={
          "https://images.pexels.com/photos/15851578/pexels-photo-15851578/free-photo-of-furniture-in-a-living-room.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
        }
        className="w-full h-[100vh] object-cover object-center"
      />
      <div className="absolute top-0 left-0 w-full h-[100vh] flex justify-start items-start">
        <div>
          <motion.p
            className="w-fit text-[2.5rem] font-bold text-gray-900 bg-white pt-5 pb-3 md:px-11 px-5 RoundedRightEnd"
            initial={"initial"}
            whileInView={"enter"}
            viewport={{ once: true }}
            custom={1.3}
            variants={HeadingTitleAnimation}
          >
            Our Customers Feedbacks
          </motion.p>
        </div>
      </div>
    </div>
  );
};

export default Header;
