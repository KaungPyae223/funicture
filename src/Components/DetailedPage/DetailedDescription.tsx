import React, { memo, useState } from "react";
import {
    Description,
    Detailed,
  } from "../../Animate/DetailedAnimate.js";
import { AnimatePresence, motion } from "framer-motion";


const DetailedDescription = memo(({data}) => {
  const [description, setdescription] = useState(false);

  return (
    <>
      <div className="w-full py-10 grid grid-cols-2 text-gray-700">
        <p
          className={`uppercase cursor-pointer py-3 ${
            description ? null : "bordeer border-b border-b-gray-700"
          } `}
          onClick={() => {
            setdescription(false);
          }}
        >
          Details
        </p>
        <p
          className={`uppercase cursor-pointer py-3 ${
            description ? "bordeer border-b border-b-gray-700" : null
          } `}
          onClick={() => {
            setdescription(true);
          }}
        >
          Description
        </p>
      </div>
      <AnimatePresence mode="wait">
        {description ? (
          <motion.div
            key={"Description"}
            variants={Description}
            initial={"initial"}
            animate={"enter"}
            exit={"exit"}
            className="text-green-800"
          >
            {data?.Description}
          </motion.div>
        ) : (
          <motion.div
            key={"Detailed"}
            variants={Detailed}
            initial={"initial"}
            animate={"enter"}
            exit={"exit"}
          >
            <table className="text-green-800">
              <tr>
                <td className="pe-10">Size</td>
                <td>{data?.Size}</td>
              </tr>
              <tr>
                <td className="pe-10">Seat Height</td>
                <td>{data?.Height}"</td>
              </tr>
              <tr>
                <td className="pe-10">Materials</td>
                <td>{data?.materials}</td>
              </tr>
              <tr>
                <td className="pe-10">Colors</td>
                <td>{data?.Color}</td>
              </tr>
              <tr>
                <td className="pe-10">Weights</td>
                <td>{data?.weight} lbs</td>
              </tr>
            </table>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
});

export default DetailedDescription;
