"use client";
// Styles
import "swiper/css";
import "swiper/css/a11y";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import { Navigation, Pagination, Scrollbar } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import BoxCard from "./BoxCard";

const boxes = [
  <BoxCard
    id="1"
    boxType="Square"
    description="Rounadslkk"
    imagePath="/image-1.jpg"
    key={1}
  />,
  <BoxCard
    id="1"
    boxType="Square"
    description="Rounadslkk"
    imagePath="/image-1.jpg"
    key={2}
  />,
  <BoxCard
    id="1"
    boxType="Square"
    description="Rounadslkk"
    imagePath="/image-1.jpg"
    key={3}
  />,
  <BoxCard
    id="1"
    boxType="Square"
    description="Rounadslkk"
    imagePath="/image-1.jpg"
    key={4}
  />,
  <BoxCard
    id="1"
    boxType="Square"
    description="Rounadslkk"
    imagePath="/image-1.jpg"
    key={5}
  />,
];

export default function BoxSelector() {
  return (
    <div className="mb-10 flex h-screen items-center">
      <div className="flex w-screen flex-col items-center">
        <h1 className="mb-6 self-center text-4xl font-extrabold leading-none tracking-tight text-gray-900 dark:text-white sm:text-5xl">
          Select type
        </h1>

        <Swiper
          hidden
          // install Swiper modules
          modules={[Navigation, Pagination, Scrollbar]}
          spaceBetween={10}
          slidesPerView={1}
          breakpoints={{
            // when window width is >= 480px
            480: {
              slidesPerView: 2,
              spaceBetween: 30,
            },
            // when window width is >= 640px
            1000: {
              slidesPerView: 4,
              spaceBetween: 30,
            },
          }}
          navigation
          initialSlide={0}
          pagination={{ clickable: true }}
          scrollbar={{ draggable: true }}
          style={{ width: "90vw", padding: "5px", alignSelf: "center" }}
        >
          {boxes.map((card) => {
            return (
              <SwiperSlide key={card?.toString() || ""}>{card}</SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </div>
  );
}
