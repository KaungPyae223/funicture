import { LuCrown } from "react-icons/lu";
import { VscVerifiedFilled } from "react-icons/vsc";
import { PiWaveformFill } from "react-icons/pi";
import React, { useRef } from "react";
import WhyChooseUsContact from "./WhyChooseUsContact";
import { motion } from "framer-motion";
import { TextFadeIn } from "../../Animate/HomeAnimate.js";

interface WhyChooseUsItem {
  icon: React.ReactNode;
  heading: string;
  contant: string;
}

const WhyChooseUs = () => {
  const whyChosseUs: WhyChooseUsItem[] = [
    {
      icon: <LuCrown className="text-3xl" />,
      heading: "We Control Our Product Quality",
      contant:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis temporibus minus similique labore dicta suscipit voluptates? In, esse.",
    },
    {
      icon: <VscVerifiedFilled className="text-3xl" />,
      heading: "Internation Standard Quality",
      contant:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugit ab quidem veritatis illum earum laborum?",
    },
    {
      icon: <PiWaveformFill className="text-3xl" />,
      heading: "Long Time Wranney",
      contant:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti dolorum voluptatibus animi fugiat iusto nobis. Alias, possimus. Explicabo, facere quae!",
    },
  ];

  const whyChooseUsComponents = whyChosseUs.map((el, i) => (
    <WhyChooseUsContact value={el} key={i} />
  ));

  return (
    <div className="mt-12 px-11 py-11 grid grid-cols-5 gap-5 ">
      <motion.p
        className="font-heading text-5xl col-span-2 font-medium leading-[4.5rem]"
        variants={TextFadeIn}
        initial={"initial"}
        whileInView={"enter"}
        viewport={{ once: true }}
      >
        Why <br></br> Should Choose <br></br> Our Company's <br></br> Products?
      </motion.p>
      <div className="col-span-3 flex flex-col gap-8">
        {whyChooseUsComponents}
      </div>
    </div>
  );
};

export default WhyChooseUs;
