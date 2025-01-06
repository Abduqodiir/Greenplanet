// components/HeroSwiper/HeroSwiper.tsx
"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Image from "next/image";
import Slide1 from "./Slide1";

interface SlideData {
  id: number;
  image: string;
  title: string;
  width: number;
  height: number;
}

const slides: SlideData[] = [
  {
    id: 1,
    image: "/image1.png",
    title: "Slide 1",
    width: 225,
    height: 225,
  },
  {
    id: 2,
    image: "/image2.png",
    title: "Slide 2",
    width: 240,
    height: 210,
  },
  // Boshqa slide'lar...
];

export default function HeroSwiper() {
  return (
    <div className="w-full h-[500px] relative">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={30}
        slidesPerView={1}
        // navigation
        pagination={{ clickable: true }}
        autoplay={{
          delay: 100000, // 3000
          disableOnInteraction: false,
        }}
        className="w-full h-full"
      >
        {/* {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div className="w-full h-full relative grid place-items-center">
              <Image
                priority
                src={slide.image}
                alt={slide.title}
                width={slide.width}
                height={slide.height}
                className="object-cover"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <h2 className="text-4xl text-white font-bold">{slide.title}</h2>
              </div>
            </div>
          </SwiperSlide>
        ))} */}

        <SwiperSlide className="mx-auto my-4">
          <Slide1 />
        </SwiperSlide>
        <SwiperSlide>
          Slide2
        </SwiperSlide>
        <SwiperSlide>
          Slide3
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
