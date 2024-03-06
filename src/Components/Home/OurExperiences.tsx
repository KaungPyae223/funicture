import React, { useRef } from "react";
import { GrLinkNext } from "react-icons/gr";
import OurExperience from "../../Images/OurExperience.jpg";
import {
  OurExperiencesLeft,
  OurExperiencesRight,
  ImageShadow,
} from "../../Animate/HomeAnimate.js";
import { motion, useInView } from "framer-motion";
import CountUp from "react-countup";

const OurExperiences = () => {
  const Counter = useRef(null);
  const CounterStart = useInView(Counter, { once: true });

  return (
    <div className="grid grid-cols-5 gap-5 px-11 py-10 mt-5">
      <motion.div
        className="col-span-2"
        initial={"initial"}
        whileInView={"enter"}
        variants={OurExperiencesLeft}
        viewport={{ once: true }}
      >
        <p className="text-4xl font-medium font-heading leading-[3rem]">
          We Provide You the Best Experiences
        </p>
        <p className="text-justify my-10">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Natus harum
          laborum voluptatibus veritatis, fuga eaque officia. Laborum, ea quo
          commodi blanditiis similique quae voluptates consequuntur.
        </p>
        <div className="mt-10 pt-8 flex flex-row gap-14">
          <div>
            <p className="text-4xl font-bold pb-1 text-green-800">
              {CounterStart ? (
                <CountUp end={20} duration={3} delay={0.5} />
              ) : null}
            </p>
            <p ref={Counter}>
              Years <br></br> Experience
            </p>
          </div>
          <div>
            <p className="text-4xl font-bold pb-1 text-green-800">
              {CounterStart ? (
                <CountUp end={54} duration={3} delay={0.5} />
              ) : null}
            </p>
            <p>
              Awards <br></br> Gained
            </p>
          </div>
          <div>
            <p className="text-4xl font-bold pb-1 text-green-800">
              {CounterStart ? (
                <CountUp end={12836} duration={3} delay={0.5} />
              ) : null}
            </p>
            <p>
              Furnitures <br></br> Sold
            </p>
          </div>
        </div>
        <button
          class="align-middle select-none text-center transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none py-3 px-6 border border-green-900 text-green-900 hover:opacity-75 focus:ring focus:ring-gray-300 active:opacity-[0.85] flex items-center gap-3 font-heading font-bold text-lg mt-10"
          type="button"
        >
          Learn More
          <GrLinkNext />
        </button>
      </motion.div>
      <div className="col-span-3 grid grid-cols-6">
        <div className="col-span-4 col-start-2 relative duration-300">
          <motion.img
            src={OurExperience}
            className="w-full"
            initial={"initial"}
            whileInView={"enter"}
            variants={OurExperiencesRight}
            viewport={{ once: true }}
          />
          <motion.div
            className="w-full absolute top-0 left-0  -z-10"
            initial={"initial"}
            whileInView={"enter"}
            variants={ImageShadow}
            viewport={{ once: true }}
          >
            <div className="w-full relative">
              <img src={OurExperience} />
              <div className="bg-green-100 absolute top-0 left-0 z-10 w-full h-full"></div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default OurExperiences;
