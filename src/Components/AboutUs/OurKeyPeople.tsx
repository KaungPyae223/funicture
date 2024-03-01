import React from "react";
import KeyDetails from "./KeyDetails";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";

import { Navigation, Pagination } from "swiper/modules";
import KeyPeopleCard from "./KeyPeopleCard";

const OurKeyPeople = () => {
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
        <SwiperSlide>
          <KeyPeopleCard />
        </SwiperSlide>
        <SwiperSlide>
          <KeyPeopleCard />
        </SwiperSlide>
        <SwiperSlide>
          <KeyPeopleCard />
        </SwiperSlide>
        <SwiperSlide>
          <KeyPeopleCard />
        </SwiperSlide>
        <SwiperSlide>
          <KeyPeopleCard />
        </SwiperSlide>
        <SwiperSlide>
          <KeyPeopleCard />
        </SwiperSlide>
        <SwiperSlide>
          <KeyPeopleCard />
        </SwiperSlide>
        <SwiperSlide>
          <KeyPeopleCard />
        </SwiperSlide>
        <SwiperSlide>
          <KeyPeopleCard />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default OurKeyPeople;
