import { Spinner } from "@material-tailwind/react";
import React from "react";
import AboutUSImg from "../Images/AboutUs.jpg";
import HomeImg from "../Images/Funicture Header.jpg";
import { motion } from "framer-motion";
import { ImageUp, LoadingAnimate } from "../Animate/LoadingAnimate.js";

const Loading = ({ setAnimationComplete }) => {
  return (
    <motion.div
      className="w-[100vw] h-[100vh] relative"
      variants={LoadingAnimate}
      initial={"initial"}
      animate={"enter"}
      custom={0}
    >
      <div className="w-fit h-64 scale-125 absolute left-[50%] top-[50%] -translate-x-[50%] -translate-y-[50%] z-10">
        <motion.img
          variants={ImageUp}
          initial={"initial"}
          animate={"enter"}
          exit={"exit"}
          custom={0}
          src={HomeImg}
          layoutId="Home"
          className="h-full object-cover object-center"
        />
      </div>
      <div className="w-fit h-56 absolute left-[20%] top-[25%] -translate-x-[50%] -translate-y-[50%]">
        <motion.img
          layoutId="AboutUs"
          variants={ImageUp}
          initial={"initial"}
          animate={"enter"}
          exit={"exit"}
          custom={0.5}
          src={AboutUSImg}
          className="h-full object-cover object-center"
        />
      </div>
      <div className="h-56 absolute right-[20%] top-[25%] translate-x-[50%] -translate-y-[50%]">
        <motion.img
          variants={ImageUp}
          layoutId="Customer"
          initial={"initial"}
          animate={"enter"}
          exit={"exit"}
          custom={1}
          src={
            "https://images.pexels.com/photos/15851578/pexels-photo-15851578/free-photo-of-furniture-in-a-living-room.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          }
          className="h-full object-cover object-center"
        />
      </div>
      <div className="absolute left-[50%] -translate-x-[50%] top-10">
        <motion.p
          layoutId="Alexa"
          className="text-center font-medium text-7xl "
        >
          <motion.span
            variants={ImageUp}
            initial={"initial"}
            animate={"enter"}
            custom={1.2}
          >
            A
          </motion.span>
          <motion.span
            variants={ImageUp}
            initial={"initial"}
            animate={"enter"}
            custom={1.5}
          >
            L
          </motion.span>
          <motion.span
            variants={ImageUp}
            initial={"initial"}
            animate={"enter"}
            custom={1.8}
          >
            E
          </motion.span>
          <motion.span
            variants={ImageUp}
            initial={"initial"}
            animate={"enter"}
            custom={2.1}
          >
            X
          </motion.span>
          <motion.span
            variants={ImageUp}
            initial={"initial"}
            animate={"enter"}
            custom={2.5}
          >
            A
          </motion.span>
        </motion.p>
      </div>

      <div className="text-3xl font-medium absolute top-[75%] left-[80%] -translate-x-[50%] -translate-y-[50%]">
        <motion.p
          variants={LoadingAnimate}
          initial={"initial"}
          animate={"enter"}
          custom={"2"}
          onAnimationComplete={() => setAnimationComplete(true)}
        >
          Loading ...
        </motion.p>
      </div>
    </motion.div>
  );
};

export default Loading;
