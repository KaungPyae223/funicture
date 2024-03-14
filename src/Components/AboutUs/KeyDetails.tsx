import React from "react";
import { FaFacebook } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaSquareSnapchat } from "react-icons/fa6";
import { RiDoubleQuotesL } from "react-icons/ri";
import { IoLogoLinkedin } from "react-icons/io";
import { useSelector } from "react-redux";

const KeyDetails = () => {
  const { DetailsData } = useSelector((state) => state.keypeople);

  return (
    <div className="mt-16 rounded-lg shadow-xl grid md:grid-cols-2 gap-10 overflow-hidden">
      <img
        src={DetailsData?.img}
        className="w-full h-full max-h-[500px] object-cover object-center"
      />
      <div className="py-5 md:pe-5 px-5  flex flex-col justify-between">
        <div>
          <p className="text-3xl font-medium">{DetailsData?.Name}</p>
          <p className="font-medium mt-1">{DetailsData?.Role}</p>
        </div>

        <div>
          <RiDoubleQuotesL className="text-4xl mt-8" />
          <p className="mb-11 mt-3">{DetailsData?.speech}</p>
        </div>

        <div className="flex flex-row gap-5">
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
