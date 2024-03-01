import React from "react";
import { RiDoubleQuotesL } from "react-icons/ri";
import { motion } from "framer-motion";
import { ReviewCardUp } from "../../Animate/HomeAnimate.js";

const ReviewCard = ({ index }) => {
  return (
    <motion.div
      className="p-10 bg-green-50 "
      variants={ReviewCardUp}
      initial={"initial"}
      whileInView={"enter"}
      viewport={{ once: true }}
      custom={(index % 2) + 1}
    >
      <RiDoubleQuotesL className="text-4xl" />
      <div className="p-3 px-5">
        <p className="text-xl font-bold pb-3">
          The Services is exteremely fast
        </p>
        <p className="text-gray-700">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore atque
          eius consectetur repudiandae at ipsum! Labore officiis esse ipsam
          culpa aliquid earum corrupti consectetur deleniti nam, aut adipisci,
          dolores delectus!
        </p>
      </div>
      <div className="mt-3 flex flex-row items-center gap-3">
        <img
          src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGVyc29ufGVufDB8fDB8fHww"
          className="w-[45px] h-[45px] rounded-3xl object-cover"
        />
        <div>
          <p className="font-bold">Alebert Suzan</p>
          <p className="text-xs">Project Manager</p>
        </div>
      </div>
    </motion.div>
  );
};

export default ReviewCard;
