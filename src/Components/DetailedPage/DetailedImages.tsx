import React, { memo, useState } from "react";
import { motion } from "framer-motion";
import { TextLeft } from "../../Animate/DetailedAnimate.js";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

import { FreeMode, Navigation, Thumbs } from "swiper/modules";

const DetailedImages = memo(({ data }) => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  return (
    <motion.div
      variants={TextLeft}
      initial={"initial"}
      animate={"enter"}
      className="relative max-h-[80vh] px-3 SliderBody"
    >
      <Swiper
        style={{
          "--swiper-navigation-color": "rgb(255 255 255 / 50%)",
          "--swiper-pagination-color": "rgb(255 255 255 / 50%)",
        }}
        loop={true}
        spaceBetween={10}
        navigation={true}
        thumbs={{ swiper: thumbsSwiper }}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper2 h-full"
      >
        {data?.map((el, i) => {
          return (
            <SwiperSlide key={i} className="h-auto w-full">
              <img
                src={el}
                className="h-full w-full object-cover object-center"
              />
            </SwiperSlide>
          );
        })}
      </Swiper>
      <Swiper
        onSwiper={setThumbsSwiper}
        loop={true}
        spaceBetween={10}
        slidesPerView={4}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper absolute w-1/2 bottom-5 left-[50%] transform -translate-x-[50%] translate-y-[100%] p-1.5 rounded-lg SliderTransparent duration-300 opacity-0 SliderNav"
      >
        {data?.map((el, i) => {
          return (
            <SwiperSlide key={i} className="h-auto cursor-pointer w-full">
              <img
                src={el}
                className="h-full object-cover object-center w-full"
              />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </motion.div>
  );
});

export default DetailedImages;
