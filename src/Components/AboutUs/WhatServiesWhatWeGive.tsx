import React from "react";
import { MdOutlineDesignServices } from "react-icons/md";
import { FaProductHunt } from "react-icons/fa6";
import { CiDeliveryTruck } from "react-icons/ci";
import ServicesCard from "./ServicesCard";

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
      contant: "We offers delivering and installation, Warranty Management, Annual Furniture ‘Health Check’ and so on",
    },
  ];

  return (
    <div className="m-11 mt-[7rem] p-11 py-16 bg-green-200 rounded-lg flex flex-col items-center justify-center gap-16">
      <p className="text-5xl font-bold">Services That We Provides</p>
      <div className="grid grid-cols-3 gap-12">
        {
            ServicesData.map((el) => {
                return <ServicesCard data={el}/>
            })
        }
      </div>
    </div>
  );
};

export default WhatServiesWhatWeGive;
