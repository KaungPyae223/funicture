import React from "react";
import { TextUp } from "../../Animate/AboutUsAnimate.js";
import { motion } from "framer-motion";

const AboutUsStart = () => {
  return (
    <div className="mt-10 py-10 md:px-11 px-5">
      <div className=" grid md:grid-cols-2 grid-cols-1 lg:gap-28 gap-10 mb-11">
        <div>
          <motion.p
            variants={TextUp}
            initial={"initial"}
            whileInView={"enter"}
            viewport={{ once: true }}
            className="font-bold text-5xl md:mb-20 mb-10"
          >
            How We Start Our Company
          </motion.p>
          <motion.img
            variants={TextUp}
            initial={"initial"}
            whileInView={"enter"}
            viewport={{ once: true }}
            className="rounded-lg"
            src="https://images.unsplash.com/photo-1485182708500-e8f1f318ba72?q=80&w=1820&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          ></motion.img>
        </div>
        <div>
          <motion.p
            variants={TextUp}
            initial={"initial"}
            whileInView={"enter"}
            viewport={{ once: true }}
            className="text-3xl font-medium leading-[3rem]"
          >
            What inspired the founding of our furniture company and what drove
            its creation?
          </motion.p>
          <motion.p
            variants={TextUp}
            initial={"initial"}
            whileInView={"enter"}
            viewport={{ once: true }}
            className="mt-7 text-justify"
          >
            In the genesis of our furniture company, the spark that ignited our
            journey was a profound passion for redefining living spaces. The
            "how" of our founding is woven into a narrative of visionary minds
            converging with a shared dream — a dream of crafting not just
            furniture but timeless pieces that elevate the essence of home.
          </motion.p>
          <motion.p
            variants={TextUp}
            initial={"initial"}
            whileInView={"enter"}
            viewport={{ once: true }}
            className="mt-5 text-justify"
          >
            The inception unfolded through a shared vision of merging artistry
            with functionality, where each piece tells a story and resonates
            with the spirit of thoughtful design. It began with the belief that
            furniture should transcend mere utility; it should be an expression
            of aesthetics, comfort, and enduring craftsmanship.
          </motion.p>
          <motion.p
            variants={TextUp}
            initial={"initial"}
            whileInView={"enter"}
            viewport={{ once: true }}
            className="mt-5 text-justify"
          >
            Our founders, driven by a collective desire to bring a unique blend
            of design and quality into the world of furniture, embarked on a
            journey marked by meticulous planning, dedication, and an unwavering
            commitment to excellence. The "how" is in the countless hours spent
            refining concepts, sourcing the finest materials, and collaborating
            with skilled artisans to breathe life into our creations.
          </motion.p>
        </div>
      </div>

      <hr className="border-gray-300" />
    </div>
  );
};

export default AboutUsStart;
