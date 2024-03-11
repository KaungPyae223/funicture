import React from "react";
import { motion } from "framer-motion";

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
      <p className="mt-5 text-xl font-medium">
        We Are Ready to Give Better Experiences for You
      </p>
    </div>
  );
};

export default ProductHeaders;
