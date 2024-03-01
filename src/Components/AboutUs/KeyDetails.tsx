import React from "react";
import { FaFacebook } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaSquareSnapchat } from "react-icons/fa6";
import { RiDoubleQuotesL } from "react-icons/ri";
import { IoLogoLinkedin } from "react-icons/io";

const KeyDetails = () => {
  return (
    <div className="mt-16 rounded-lg shadow-xl grid grid-cols-2 gap-10 overflow-hidden">
      <img
        src="https://img.freepik.com/free-photo/portrait-beautiful-asian-woman-saleswoman-pointing-fingers-right-showing-info-banner-logo-sale-advertisement-standing-white-background_1258-89076.jpg?size=626&ext=jpg"
        className="w-fit"
      />
      <div className="py-5 pe-5">
        <p className="text-3xl font-medium">Alexa Shuang</p>
        <p className="font-medium mt-1">CEO, Founder of Alexa</p>
        <RiDoubleQuotesL className="text-4xl mt-8" />
        <p className="mb-11 mt-3">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus rem
          ratione fugiat nemo voluptates, veritatis exercitationem beatae
          accusantium? Atque magnam dolore laboriosam amet illo obcaecati nobis
          sed sequi provident incidunt.
        </p>
        <div className="flex flex-row gap-5 items-center">
          <FaFacebook className="text-3xl text-blue-700 cursor-pointer" />
          <FaSquareXTwitter className="text-3xl cursor-pointer" />
          <FaSquareSnapchat className="text-3xl text-yellow-800 cursor-pointer" />
          <IoLogoLinkedin className="text-3xl text-blue-700 cursor-pointer" />
        </div>
      </div>
    </div>
  );
};

export default KeyDetails;
