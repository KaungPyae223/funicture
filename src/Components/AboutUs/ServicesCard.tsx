import React from "react";
import { motion } from "framer-motion";
import { CardUp } from "../../Animate/AboutUsAnimate.js";

const ServicesCard = ({ data, index }) => {
  return (
    <motion.div
      variants={CardUp}
      initial={"initial"}
      whileInView={"enter"}
      viewport={{ once: true }}
      custom={index + 1}
      className="flex flex-col md:justify-start justify-center md:items-start items-center"
    >
      {data.icon}
      <p className="py-5 text-xl font-medium text-center md:text-start">{data.heading}</p>
      <p>{data.contant}</p>
    </motion.div>
  );
};

export default ServicesCard;
