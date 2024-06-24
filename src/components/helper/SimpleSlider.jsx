// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { data } from "./Depoimento";

// Import Swiper styles
import "swiper/css";

export default function Car() {
  return (
    <Swiper
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={50}
      slidesPerView={3}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log("slide change")}
    >
      {data.map((item) => (
        <SwiperSlide key={item.id}>
          <div className="flex">
            <div className="w-[60px] h-[60px] bg-[#d9d9d9] rounded-full"></div>
            <div className="pl-4">
              <h3 className="text-primary-2 text-2xl font-bold">{item.name}</h3>
              <span className="font-roboto text-lg text-[#355575]">
                {item.role}
              </span>
            </div>
          </div>
          <p className="text-lg text-[#355575] font-roboto">{item.text}</p>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
