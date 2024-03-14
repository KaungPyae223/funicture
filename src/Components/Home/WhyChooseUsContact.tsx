import React from "react";
import { motion } from "framer-motion";
import { TextRight } from "../../Animate/HomeAnimate.js";

const WhyChooseUsContact = ({ value }) => {
  return (
    <motion.div
      className="flex lg:flex-row flex-col gap-5 items-center lg:justify-start justify-center lg:border-b lg:border-b-gray-500 pb-5 px-5 lg:px-0"
      variants={TextRight}
      initial={"initial"}
      whileInView={"enter"}
      viewport={{ once: true }}
    >
      <div className="rounded-full min-h-[4rem] min-w-[4rem] border border-green-700 bg-white flex justify-center items-center">
        {value.icon}
      </div>
      <div className="font-heading">
        <p className="lg:text-3xl text-2xl text-center lg:text-start font-medium">
          {value.heading}
        </p>
        <p className="pt-3 lg:text-start text-center">{value.contant}</p>
      </div>
    </motion.div>
  );
};

export default WhyChooseUsContact;
