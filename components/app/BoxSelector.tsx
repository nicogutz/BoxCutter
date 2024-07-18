"use client";
import { A11y, Navigation, Pagination, Scrollbar } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import BoxCard from "./BoxCard";

// Styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

export default function BoxSelector() {
  return (
    <div className="flex h-full w-full">
      <div className="mx-auto w-full self-center text-center">
        <div className="w-full space-y-4 self-center p-6 sm:p-8 md:space-y-6">
          <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 dark:text-white sm:text-5xl">
            Select your box.
          </h1>
          <Swiper
            // install Swiper modules
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            slidesPerView={1}
            // navigation
            centeredSlides
            centeredSlidesBounds
            pagination={{ clickable: true }}
            scrollbar={{ draggable: true }}
            style={{ width: "100%", maxWidth: "600px", padding: "0px"}}
          >
            <SwiperSlide>
              <BoxCard />
            </SwiperSlide>
            <SwiperSlide>
              <BoxCard />
            </SwiperSlide>
            <SwiperSlide>
              <BoxCard />
            </SwiperSlide>
            <SwiperSlide>
              <BoxCard />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  );
}
