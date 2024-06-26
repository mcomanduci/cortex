import { Swiper, SwiperSlide } from "swiper/react";

import { Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import ServicosCard from "./ServicosCard";

export default function SwipperServicos() {
  return (
    <Swiper
      slidesPerView={1}
      breakpoints={{
        900: { slidesPerView: 2 },
        1400: { slidesPerView: 3 },
      }}
      spaceBetween={20}
      loop={true}
      pagination={{
        clickable: true,
      }}
      navigation={true}
      modules={[Pagination, Navigation]}
      className="pb-16 px-10"
    >
      <SwiperSlide className="flex justify-center items-center">
        <ServicosCard />
      </SwiperSlide>
      <SwiperSlide className="flex justify-center items-center">
        <ServicosCard />
      </SwiperSlide>{" "}
      <SwiperSlide className="flex justify-center items-center">
        <ServicosCard />
      </SwiperSlide>{" "}
      <SwiperSlide className="flex justify-center items-center">
        <ServicosCard />
      </SwiperSlide>{" "}
      <SwiperSlide className="flex justify-center items-center">
        <ServicosCard />
      </SwiperSlide>
      <SwiperSlide className="flex justify-center items-center">
        <ServicosCard />
      </SwiperSlide>
    </Swiper>
  );
}
