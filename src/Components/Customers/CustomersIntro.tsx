import React from "react";
import WorldMap from "../../Images/WorldMap.svg";
import { motion } from "framer-motion";
import { CustomerLeft, CustomerRight } from "../../Animate/CustomersAnimate.js";

const CustomersIntro = () => {
  return (
    <div className="my-24 md:px-11 px-5 grid md:grid-cols-2 md:gap-10 gap-16">
      <motion.div
        variants={CustomerLeft}
        initial={"initial"}
        whileInView={"enter"}
        viewport={{ once: true }}
        custom={0.7}
      >
        <p className="text-3xl font-medium leading-[3rem]">
          Customers from Over 50 countries <span className="lg:block"></span>{" "}
          Around the World
        </p>
        <p className="mt-10 md:w-4/5 w-full">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Totam, quod
          nisi magni expedita corporis enim, eveniet dolorem ipsa vitae
          perferendis autem, nesciunt soluta veniam tenetur temporibus.
          Veritatis non veniam repudiandae.
        </p>
      </motion.div>
      <motion.div
        variants={CustomerRight}
        initial={"initial"}
        whileInView={"enter"}
        viewport={{ once: true }}
        custom={1}
      >
        <img src={WorldMap} className="w-4/5 mx-auto" />
      </motion.div>
    </div>
  );
};

export default CustomersIntro;
