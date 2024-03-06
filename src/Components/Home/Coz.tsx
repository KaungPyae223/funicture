import React from "react";
import { Button } from "@material-tailwind/react";
import { motion } from "framer-motion";
import {
  OurExperiencesLeft,
  OurExperiencesRight,
  ImageRight,
} from "../../Animate/HomeAnimate.js";
const Coz = () => {
  return (
    <div className="px-11 py-10 my-10 grid grid-cols-2 gap-5">
      <motion.img
        src="https://plus.unsplash.com/premium_photo-1670359037486-41aa5e6594ad?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        initial={"initial"}
        whileInView={"enter"}
        variants={OurExperiencesLeft}
        viewport={{ once: true }}
      />
      <motion.div
        className="font-heading"
        initial={"initial"}
        whileInView={"enter"}
        variants={OurExperiencesRight}
        viewport={{ once: true }}
      >
        <p className="font-medium text-3xl mb-8">Cozy is Minimalist</p>
        <p className="mb-8">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur
          veniam optio, minus nihil officia esse ad quos blanditiis possimus
          suscipit similique, temporibus animi incidunt corrupti.
        </p>
        <Button
          variant="filled"
          className="rounded-none bg-green-400 text-white py-5 px-11 mb-8"
        >
          Shop Now
        </Button>
        <div className="relative w-full">
          <div className="absolute right-0 w-[100vw]">
            <div className=" flex flex-row justify-end">
              <motion.div
                className="p-2 bg-white w-64"
                initial={"initial"}
                whileInView={"enter"}
                variants={ImageRight}
                custom={1}
                viewport={{ once: true }}
              >
                <img
                  src="https://images.unsplash.com/photo-1503602642458-232111445657?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  className="h-56 w-full object-cover object-center"
                />
              </motion.div>
              <motion.div
                className="p-2 bg-white w-64"
                initial={"initial"}
                whileInView={"enter"}
                variants={ImageRight}
                custom={2}
                viewport={{ once: true }}
              >
                <img
                  src="https://images.unsplash.com/photo-1580480055273-228ff5388ef8?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzJ8fGZ1cm5pdHVyZXxlbnwwfHwwfHx8MA%3D%3D"
                  className="h-56 w-full object-cover object-center"
                />
              </motion.div>
              <motion.div
                className="p-2 bg-white w-64"
                initial={"initial"}
                whileInView={"enter"}
                variants={ImageRight}
                custom={2}
                viewport={{ once: true }}
              >
                <img
                  src="https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDN8fGZ1cm5pdHVyZXxlbnwwfHwwfHx8MA%3D%3D"
                  className="h-56 w-full object-cover object-center"
                />
              </motion.div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Coz;
