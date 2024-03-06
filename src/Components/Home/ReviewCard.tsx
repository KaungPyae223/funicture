import React from "react";
import { RiDoubleQuotesL } from "react-icons/ri";
import { motion } from "framer-motion";
import { ReviewCardUp } from "../../Animate/HomeAnimate.js";

const ReviewCard = ({ data }) => {
  return (
    <motion.div
      className="p-10 bg-green-50 h-full flex flex-col justify-between"
      variants={ReviewCardUp}
      initial={"initial"}
      whileInView={"enter"}
      custom={0.5}
    >
      <div className="p-3 px-5">
        <RiDoubleQuotesL className="text-4xl" />
        <p className="text-xl font-bold pb-3 mt-3">{data.title}</p>
        <p className="text-gray-700 line-clamp-6">{data.body}</p>
      </div>
      <div className="mt-3 flex flex-row items-center gap-3">
        <img
          src={data.img}
          className="w-[45px] h-[45px] rounded-3xl object-cover"
        />
        <div>
          <p className="font-bold">{data.Name}</p>
          <p className="text-xs">{data.Position}</p>
        </div>
      </div>
    </motion.div>
  );
};

export default ReviewCard;
