import React from "react";
import { CustomerLeft, CustomerRight } from "../../Animate/CustomersAnimate.js";
import { motion } from "framer-motion";

const TotalCustomers = () => {
  return (
    <div className="my-20 md:px-11 px-5 grid md:grid-cols-2 gap-10">
      <motion.img
        variants={CustomerLeft}
        initial={"initial"}
        whileInView={"enter"}
        viewport={{ once: true }}
        custom={1}
        className="md:w-4/5 w-full row-start-2 md:row-start-1"
        src="https://images.unsplash.com/photo-1556741533-6e6a62bd8b49?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      />
      <motion.div
        variants={CustomerRight}
        initial={"initial"}
        whileInView={"enter"}
        viewport={{ once: true }}
        custom={0.7}
      >
        <p className="text-3xl font-medium leading-[3rem]">
          Over 1000 Customers Trust Us <span className="md:block"></span> for Reliable and Satisfying
          Services.
        </p>
        <p className="mt-10 md:w-4/5 w-full">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deleniti
          voluptatum omnis dicta corrupti, velit, totam temporibus quaerat,
          ullam hic molestiae exercitationem porro. Nisi ipsam eius nam,
          pariatur modi voluptates alias.
        </p>
      </motion.div>
    </div>
  );
};

export default TotalCustomers;
