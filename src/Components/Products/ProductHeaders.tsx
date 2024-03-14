import React from "react";
import { motion } from "framer-motion";
import { TextUp } from "../../Animate/ProductAnimate.js";

const ProductHeaders = () => {
  return (
    <div className="px-11 py-10 h-[100vh] flex flex-col justify-center items-center">
      <motion.p
        layoutId="Alexa"
        transition={{ duration: 0.6 }}
        className="font-medium text-9xl"
      >
        Alexa
      </motion.p>
      <motion.p variants={TextUp} initial={"initial"} whileInView={"enter"} viewport={{once:true}} className="mt-5 text-xl font-medium text-center">
        We Are Ready to Give Better Experiences for You
      </motion.p>
    </div>
  );
};

export default ProductHeaders;
