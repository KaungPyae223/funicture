import React from "react";
import { AboutUsRight, AboutUsLeft } from "../../Animate/AboutUsAnimate.js";
import { motion } from "framer-motion";

const HowWeMake = () => {
  return (
    <div className="my-5 mb-11 md:px-11 px-5 grid lg:grid-cols-2 grid-cols-1 lg:gap-28 gap-10">
      <motion.div
        variants={AboutUsLeft}
        initial={"initial"}
        whileInView={"enter"}
        viewport={{ once: true }}
        custom={0.7}
      >
        <p className="text-3xl font-medium leading-[3rem]">
          Learn About Why We Exit and What Keep Us Going
        </p>
        <p className="mt-7">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quisquam
          totam illum impedit minus corporis optio tempora, necessitatibus
          mollitia pariatur praesentium esse ut soluta eveniet nulla!
        </p>
      </motion.div>
      <motion.iframe
        variants={AboutUsRight}
        initial={"initial"}
        whileInView={"enter"}
        viewport={{ once: true }}
        custom={1}
        className="w-full rounded-lg aspect-video"
        src="https://www.youtube.com/embed/x41EJqetkTI?si=pruHSxpMjkn9Q7RR"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen
      ></motion.iframe>
    </div>
  );
};

export default HowWeMake;
