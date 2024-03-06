import React from "react";
import { FaFacebook } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaSquareSnapchat } from "react-icons/fa6";
import { IoLogoLinkedin } from "react-icons/io";

const ContactData = () => {
  return (
    <div className="bg-gradient-to-b from-green-500 to-green-300 p-8 font-heading rounded-lg text-white h-full">
      <p className="text-xl font-bold text-white">Get in touch</p>
      <p className="text-lg font-medium mt-8">Vist us</p>
      <p className="mt-0.5 text-sm">
        Lorem ipsum dolor, sit amet consectetur adipisicing.
      </p>
      <p className="text-lg font-medium mt-5">Contact to us</p>
      <p className="text-sm mt-0.5 ">
        Our friendly team is hear to help
        <br></br>
        www.Info@Alexa.com
      </p>
      <p className="text-lg font-medium mt-5">Call us</p>
      <p className="text-sm mt-0.5 ">
        Mon-Fri from 8a.m to 5p.m
        <br></br>
        (+77) 111 222 333
      </p>
      <p className="text-lg font-medium mt-5">Social Media</p>
      <div className="flex flex-row gap-3 mt-0.5 text-xl">
        <FaFacebook className="cursor-pointer" />
        <FaSquareXTwitter className=" cursor-pointer" />
        <FaSquareSnapchat className="cursor-pointer" />
        <IoLogoLinkedin className=" cursor-pointer" />
      </div>
    </div>
  );
};

export default ContactData;
