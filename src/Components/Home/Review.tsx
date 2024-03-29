import { GrPrevious } from "react-icons/gr";
import { GrNext } from "react-icons/gr";
import { IconButton } from "@material-tailwind/react";
import ReviewCard from "./ReviewCard";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

// import required modules
import { Navigation, A11y } from "swiper/modules";
import { useSelector } from "react-redux";

const Review = () => {
  const { ReviewData } = useSelector((state) => state.home);

  return (
    <div className="lg:mt-[7rem] py-10 lg:px-11 px-5 font-heading">
      <div className="flex justify-between items-center lg:flex-row flex-col gap-3">
        <p className="text-3xl font-medium py-5 lg:leading-[3rem]">
          What Our Customers <span className="lg:block"></span> are Saying
        </p>
        <div>
          <IconButton
            variant="outlined"
            className="Prev rounded-full me-3 bg-green-100 border-green-100 "
          >
            <GrPrevious className="text-lg text-green-600" />
          </IconButton>

          <IconButton
            variant="outlined"
            className="Next rounded-full bg-green-100 border-green-100"
          >
            <GrNext className="text-lg text-green-600" />
          </IconButton>
        </div>
      </div>
      <div className="py-3 mt-5 font-heading">
        <Swiper
          
          pagination={{
            clickable: true,
          }}
          breakpoints={{
            960: {
              slidesPerView: 2,
              spaceBetween: 30,
            },
            
          }}
          loop={true}
          grabCursor={true}
          modules={[Navigation, A11y]}
          navigation={{
            nextEl: ".Next",
            prevEl: ".Prev",
          }}
        >
          {ReviewData.map((el, i) => {
            return (
              <SwiperSlide className="h-auto" key={i}>
                <ReviewCard data={el} />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </div>
  );
};

export default Review;
