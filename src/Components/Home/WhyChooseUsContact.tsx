import React from "react";
import { motion } from "framer-motion";
import { TextRight } from "../../Animate/HomeAnimate.js";

const WhyChooseUsContact = ({ value }) => {
  return (
    <motion.div
      className="flex flex-row gap-5 items-center justify-start border-b border-b-gray-500 pb-5"
      variants={TextRight}
      initial={"initial"}
      whileInView={"enter"}
      viewport={{ once: true }}
    >
      <div className="rounded-full min-h-[4rem] min-w-[4rem] border border-green-700 bg-white flex justify-center items-center">
        {value.icon}
      </div>
      <div className="font-heading">
        <p className="text-3xl font-medium">{value.heading}</p>
        <p className="pt-3">{value.contant}</p>
      </div>
    </motion.div>
  );
};

export default WhyChooseUsContact;
