import React from "react";
import { MdOutlineDesignServices } from "react-icons/md";
import { FaProductHunt } from "react-icons/fa6";
import { CiDeliveryTruck } from "react-icons/ci";
import ServicesCard from "./ServicesCard";
import { motion } from "framer-motion";
import { Fade } from "../../Animate/AboutUsAnimate.js";

type Services = {
  icon: React.ReactNode;
  heading: string;
  contant: string;
};

const WhatServiesWhatWeGive = () => {
  const ServicesData: Services[] = [
    {
      icon: <MdOutlineDesignServices className="text-7xl text-blue-gray-700" />,
      heading: "Consultancy and Design Services",
      contant:
        "We offer consultancy services to assist clients in making informed decisions.",
    },
    {
      icon: <FaProductHunt className="text-7xl text-blue-gray-700" />,
      heading: "Procurement and Product Selection",
      contant:
        "We assist clients in selecting the right products for their spaces.",
    },
    {
      icon: <CiDeliveryTruck className="text-7xl text-blue-gray-700" />,
      heading: "Delivery, Installation, and Post-Project Support",
      contant:
        "We offers delivering and installation, Warranty Management, Annual Furniture ‘Health Check’ and so on",
    },
  ];

  return (
    <motion.div
      variants={Fade}
      initial={"initial"}
      whileInView={"enter"}
      viewport={{ once: true }}
      custom={1}
      className="md:m-11 m-5  mt-[7rem] md:px-11 px-5 py-16 bg-green-200 rounded-lg flex flex-col items-center justify-center gap-16"
    >
      <p className="md:text-5xl text-4xl font-bold">
        Services That We Provides
      </p>
      <div className="grid md:grid-cols-3 grid-cols-1 gap-12">
        {ServicesData.map((el, i) => {
          return <ServicesCard data={el} key={i} index={i} />;
        })}
      </div>
    </motion.div>
  );
};

export default WhatServiesWhatWeGive;
