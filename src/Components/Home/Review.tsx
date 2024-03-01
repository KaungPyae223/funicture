import React from "react";
import { GrPrevious } from "react-icons/gr";
import { GrNext } from "react-icons/gr";
import { IconButton } from "@material-tailwind/react";
import { RiDoubleQuotesL } from "react-icons/ri";
import ReviewCard from "./ReviewCard";

const Review = () => {
  return (
    <div className="mt-[7rem] py-10 px-11 font-heading">
      <div className="flex justify-between items-center">
        <p className="text-3xl font-medium py-5 leading-[3rem]">
          What Our Customers <br></br> are Saying
        </p>
        <div>
          <IconButton
            variant="outlined"
            className="rounded-full me-3 bg-green-100 border-green-100 "
          >
            <GrPrevious className="text-lg text-green-600" />
          </IconButton>

          <IconButton
            variant="outlined"
            className="rounded-full bg-green-100 border-green-100"
          >
            <GrNext className="text-lg text-green-600" />
          </IconButton>
        </div>
      </div>
      <div className="py-3 grid grid-cols-2 gap-5 mt-5 font-heading">
        <ReviewCard index={0} />
        <ReviewCard index={1} />
      </div>
    </div>
  );
};

export default Review;
