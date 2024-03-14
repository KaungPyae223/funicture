import React from "react";
import { RiDoubleQuotesL, RiDoubleQuotesR } from "react-icons/ri";
import { TextUp, CustomerRight } from "../../Animate/CustomersAnimate.js";
import { motion } from "framer-motion";

const HeadCustomerReview = () => {
  return (
    <div className="my-24 md:px-11 px-5 grid md:grid-cols-2 md:gap-10 gap-16">
      <div>
        <motion.p
          variants={TextUp}
          initial={"initial"}
          whileInView={"enter"}
          viewport={{ once: true }}
          className="text-3xl font-medium leading-[3rem]"
        >
          "This company provides top-notch, all-in-one furniture services to
          ensure utmost satisfaction"
        </motion.p>
        <motion.p
          variants={TextUp}
          initial={"initial"}
          whileInView={"enter"}
          viewport={{ once: true }}
          className="font-bold text-xl mt-3"
        >
          Stevin Jones
        </motion.p>
        <motion.p
          variants={TextUp}
          initial={"initial"}
          whileInView={"enter"}
          viewport={{ once: true }}
          className="font-medium"
        >
          CEO of Jones Technologies Co Ltd.
        </motion.p>

        <motion.div
          variants={TextUp}
          initial={"initial"}
          whileInView={"enter"}
          viewport={{ once: true }}
          className="md:w-4/5 w-full"
        >
          <RiDoubleQuotesL className="text-4xl mt-10" />
          <p className=" my-3">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempore
            labore tempora, earum ipsam cumque sed, fugit quam provident quaerat
            consequatur eius ducimus rerum velit deleniti quibusdam architecto
            fuga assumenda laborum!
          </p>
          <RiDoubleQuotesR className="text-4xl ms-auto" />
          <p className="font-medium text-center mt-3">2023 January 24</p>
        </motion.div>
      </div>
      <motion.div
        variants={CustomerRight}
        initial={"initial"}
        whileInView={"enter"}
        viewport={{ once: true }}
        custom={1}
      >
        <img
          className="md:w-4/5 w-full mx-auto max-h-[500px] object-cover object-top"
          src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        />
      </motion.div>
    </div>
  );
};

export default HeadCustomerReview;
