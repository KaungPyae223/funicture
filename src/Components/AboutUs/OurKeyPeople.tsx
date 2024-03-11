import React from "react";
import KeyDetails from "./KeyDetails";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";

import { Navigation, Pagination } from "swiper/modules";
import KeyPeopleCard from "./KeyPeopleCard";
import { useSelector } from "react-redux";

const OurKeyPeople = () => {

  const {keyPeopleData} = useSelector((state) => state.keypeople)
  
  return (
    <div className="px-11 my-24">
      <p className="text-5xl font-bold">Our Key Peoples</p>
      <KeyDetails />
      <Swiper
        slidesPerView={4}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mt-16 p-5 pb-12"
      >
        {
          keyPeopleData.map((el,i) => {
            return (
              <SwiperSlide key={i} className="h-auto">
                <KeyPeopleCard data={el}/>
              </SwiperSlide>
            );
          })
        }
      </Swiper>
    </div>
  );
};

export default OurKeyPeople;
