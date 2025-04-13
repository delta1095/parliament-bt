"use client";

import React from "react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import Image from "next/image";
import Link from "next/link";

type NewsItem = {
  title: string;
  imageUrl: string;
  link: string;
  publicationDate: string;
  alt: string;
};

const newsItems: NewsItem[] = [
  {
    title: "Order Order | No.365 Days As Speaker",
    imageUrl:
      "/images/default-source/events-library/speaker-chamber-chair-2.webp?sfvrsn=e52e5108_3",
    link: "/events/events/Details/order-order---no.365-days-as-speaker",
    publicationDate: "02 Aug 2024",
    alt: "Speaker Chair",
  },
  {
    title: "Order Order | My First Budget As Speaker",
    imageUrl:
      "/images/default-source/about-us/budget-2024-cny-2024-yu-sheng-2.webp?sfvrsn=192d5108_1",
    link: "/events/events/Details/order-order---my-first-budget-as-speaker",
    publicationDate: "17 May 2024",
    alt: "Budget 2024 Yu Sheng",
  },
  {
    title: "Order Order | Speaker Seah's First Blog",
    imageUrl:
      "/images/default-source/speaker's-blog/pic-1a9c7435dbcb5f64e2b198ff00006af031.webp?sfvrsn=ad2b5108_1",
    link: "/events/events/Details/order-order-speaker-seah's-first-blog",
    publicationDate: "09 Nov 2023",
    alt: "Speaker Blog",
  },
  {
    title: "Latest Videos on Parliament Speeches available here",
    imageUrl:
      "/images/default-source/Latest-News-Library/cna-videos-3-by-2_optimized.jpg?sfvrsn=654a4508_0",
    link: "https://www.channelnewsasia.com/search?q=Parliament&type%5B0%5D=video&categories%5B0%5D=Singapore",
    publicationDate: "22 May 2017",
    alt: "CNA Videos",
  },
  {
    title: "Link to Budget 2025",
    imageUrl:
      "/images/default-source/about-us/budget-2025-2.webp?sfvrsn=372d5108_3",
    link: "/events/events/Details/link-to-budget-2025",
    publicationDate: "21 Jan 2025",
    alt: "Budget 2025",
  },
  {
    title: "AI-powered search engine for Singapore's Hansard Reports",
    imageUrl: "/images/default-source/about-us/main.webp?sfvrsn=d8425708_2",
    link: "/events/events/Details/ai-powered-search-engine-for-singapore's-hansard-reports",
    publicationDate: "13 Aug 2024",
    alt: "Hansard AI Search",
  },
];

const LatestNewsCarousel: React.FC = () => {
  const [sliderRef] = useKeenSlider<HTMLDivElement>({
    loop: true,
    slides: {
      perView: 1,
    },
    breakpoints: {
      "(min-width: 768px)": {
        slides: { perView: 2 },
      },
      "(min-width: 1024px)": {
        slides: { perView: 3 },
      },
    },
  });

  return (
    <div className="container mx-auto px-4">
      <h2 className="text-2xl font-semibold text-center mb-6">LATEST NEWS</h2>
      <div ref={sliderRef} className="keen-slider">
        {newsItems.map((item, index) => (
          <div key={index} className="keen-slider__slide px-2">
            <div className="border rounded shadow-md h-[460px] flex flex-col items-center justify-between overflow-hidden">
              <div className="relative w-full h-[300px]">
                <Image
                  src={item.imageUrl}
                  alt={item.alt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 800px"
                />
              </div>
              <div className="p-4 text-center">
                <h3 className="text-lg font-medium h-12 overflow-hidden">
                  {item.title}
                </h3>
                <Link
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline inline-block mt-2"
                >
                  Read more
                </Link>
                <input
                  type="hidden"
                  value={item.publicationDate}
                  className="publicationDate"
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LatestNewsCarousel;
