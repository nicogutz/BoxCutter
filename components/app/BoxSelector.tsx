"use client";
import { Navigation, Pagination, Scrollbar } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

// Styles
import "swiper/css";
import "swiper/css/a11y";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

export interface BoxSelectorProps extends React.HTMLProps<HTMLDivElement> {
  boxCards: React.ReactNode[];
}

export default function BoxSelector(props: BoxSelectorProps) {
  return (
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
      style={{ width: "100%", maxWidth: "1000px", padding: "0px" }}
    >
      {props.boxCards.map((card) => {
        return <SwiperSlide key={card?.toString() || ""}>{card}</SwiperSlide>;
      })}
    </Swiper>
  );
}
