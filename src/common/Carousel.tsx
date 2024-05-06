import React, { useState } from "react";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
import Star from "../assets/icons/star.svg";

interface ICarouselProps {
  slides: ISlide[];
}

interface ISlide {
  src: string;
  text: string;
  name: string;
  country: string;
}

const Carousel: React.FC<ICarouselProps> = ({ slides }) => {
  const [current, setCurrent] = useState<number>(0);

  const previousSlideHandler = (): void => {
    if (current === 0) {
      setCurrent(slides.length - 1);
    }
    setCurrent(current - 1);
  };

  const NextSlideHandler = (): void => {
    if (current === slides.length - 1) {
      setCurrent(0);
    }
    setCurrent(current + 1);
  };

  return (
    <div className="relative h-[400px] max-w-[400px] overflow-hidden rounded-2xl">
      <div
        className="flex transition duration-300 ease-in-out"
        style={{ transform: `translateX(-${current * 100}%)` }}
      >
        {slides.map(({ src, text, name, country }, index) => {
          return (
            <div
              key={index}
              className="relative h-full min-h-fit w-full flex-shrink-0 "
            >
              <img
                className="min-h-[400px] object-cover"
                src={src}
                alt={`Slideshow image ${index}`}
              />
              <div className="absolute left-0 top-44 flex h-96 w-full flex-col gap-2 bg-gray-800/[0.6] p-4 text-white lg:gap-4">
                <p>{text}</p>

                <div className="flex justify-between">
                  <h1 className="text-xl font-semibold">{name}</h1>

                  <div className="hidden lg:flex">
                    <img src={Star} className="h-auto w-5" alt="" />
                    <img src={Star} className="h-auto w-5" alt="" />
                    <img src={Star} className="h-auto w-5" alt="" />
                    <img src={Star} className="h-auto w-5" alt="" />
                    <img src={Star} className="h-auto w-5" alt="" />
                  </div>
                </div>
                <h2>{country}</h2>
              </div>
            </div>
          );
        })}
      </div>
      <button
        onClick={previousSlideHandler}
        disabled={current === 0}
        className="disabled:opacity-50"
      >
        <IoIosArrowBack className="absolute bottom-5 right-16 h-7 w-7 rounded-full border p-1 text-white hover:cursor-pointer" />
      </button>
      <button
        className="disabled:opacity-50"
        onClick={NextSlideHandler}
        disabled={current === slides.length - 1}
      >
        <IoIosArrowForward className="absolute bottom-5 right-5 h-7 w-7 rounded-full border p-1 text-white hover:cursor-pointer" />
      </button>
    </div>
  );
};

export default Carousel;
