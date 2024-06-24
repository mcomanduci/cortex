import { Swiper, SwiperSlide } from "swiper/react";
import { data } from "./Depoimento";

import { Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

export default function Swipper() {
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
      {data.map((item) => (
        <SwiperSlide className="flex justify-center items-center" key={item.id}>
          <div className="max-w-[382px] space-y-4">
            <div className="flex">
              <div className="w-[60px] h-[60px] bg-[#d9d9d9] rounded-full"></div>
              <div className="pl-4">
                <h3 className="text-primary-2 text-2xl font-bold">
                  {item.name}
                </h3>
                <span className="font-roboto text-lg text-[#355575]">
                  {item.role}
                </span>
              </div>
            </div>
            <p className="text-lg text-[#355575] font-roboto">{item.text}</p>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
