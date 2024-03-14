import React from "react";
import { GrLinkNext } from "react-icons/gr";
import CategoryImage1 from "../../Images/Categories1.jpg";
import CategoryImage2 from "../../Images/Categories2.jpg";
import CategoryImage3 from "../../Images/Categories3.jpg";
import CategoryImage4 from "../../Images/Categories4.jpg";
import { motion } from "framer-motion";
import {
  CategoriesLeft,
  CategoriesRight,
  CategoriesUp,
} from "../../Animate/HomeAnimate.js";

const HomeCatagories = () => {
  return (
    <div className="mt-10 py-10 lg:px-11 px-5 grid lg:grid-cols-3 grid-cols-2 gap-5">
      <motion.div
        className="border border-green-200 col-span-2 p-8"
        variants={CategoriesLeft}
        whileInView={"enter"}
        initial={"initial"}
        viewport={{ once: true }}
      >
        <p className="text-3xl font-medium font-heading leading-[3rem]">
          Our Provide <br></br> Products Categories
        </p>
        <p className="pe-5 pt-10">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus,
          aliquam debitis enim, repellat fuga ut aut, illo tempora nam
          laboriosam temporibus odit incidunt voluptatum. Delectus repellat
          voluptatum corrupti vero eveniet.
        </p>
        <button
          class="align-middle select-none text-center transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none py-3 px-6 border border-green-900 text-green-900 hover:opacity-75 focus:ring focus:ring-gray-300 active:opacity-[0.85] flex items-center gap-3 font-heading font-bold text-lg mt-10"
          type="button"
        >
          Learn More
          <GrLinkNext />
        </button>
      </motion.div>
      <motion.div
        variants={CategoriesRight}
        whileInView={"enter"}
        initial={"initial"}
        viewport={{ once: true }}
      >
        <div className="relative h-full">
          <img src={CategoryImage1} className="h-full object-cover" />
          <p className="text-2xl p-3 absolute bottom-0 left-0">Chairs</p>
        </div>
      </motion.div>
      <motion.div
        variants={CategoriesUp}
        whileInView={"enter"}
        initial={"initial"}
        viewport={{ once: true }}
        custom={1}
      >
        <div className="relative h-full">
          <img src={CategoryImage2} className="h-full object-cover" />
          <p className="text-2xl p-3 absolute bottom-0 left-0">Lambs</p>
        </div>
      </motion.div>
      <motion.div
        variants={CategoriesUp}
        whileInView={"enter"}
        initial={"initial"}
        viewport={{ once: true }}
        custom={2}
      >
        <div className="relative h-full">
          <img src={CategoryImage3} className="h-full object-cover" />
          <p className="text-2xl p-3 absolute bottom-0 left-0">Desks</p>
        </div>
      </motion.div>
      <motion.div
        variants={CategoriesUp}
        whileInView={"enter"}
        initial={"initial"}
        viewport={{ once: true }}
        custom={3}
      >
        <div className="relative h-full">
          <img src={CategoryImage4} className="object-contain h-full" />
          <p className="text-2xl p-3 absolute bottom-0 left-0">
            Home Accessaries
          </p>
        </div>
      </motion.div>
    </div>
  );
};

export default HomeCatagories;
