"use client";

import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import Image from "next/image";

const slides = [
  {
    src: "/slider/1.jpg",
    caption: (
      <p>
        The Parliament of Bhutan is the country's highest law-making body or
        legislature. The Parliament, through elected and appointed
        representatives, passes laws, scrutinizes the work of government and
        deliberates and decides on issues of national concern.
      </p>
    ),
  },
  {
    src: "/slider/2.jpg",
    caption: "Legislative Process in Action",
  },
  {
    src: "/slider/3.jpg",
    caption: "Preserving Democratic Values",
  },
];

export default function Slider() {
  const [sliderRef] = useKeenSlider<HTMLDivElement>({
    loop: true,
    slides: {
      origin: "auto",
      perView: 1,
      spacing: 0,
    },
  });

  return (
    <div className="w-full">
      <div
        ref={sliderRef}
        className="keen-slider w-full h-[400px] sm:h-[500px] md:h-[600px]"
      >
        {slides.map((slide, idx) => (
          <div
            key={idx}
            className="keen-slider__slide relative w-full h-full flex-shrink-0"
          >
            <Image
              src={slide.src}
              alt={`Slide ${idx + 1}`}
              fill
              priority
              className="object-cover"
            />
            {/* Unique overlay per slide */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="bg-white/70 px-6 py-4 rounded-xl shadow-lg max-w-xl text-center">
                {slide.caption}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
