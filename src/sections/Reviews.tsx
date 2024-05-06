import React from "react";
import StoreLinks, { BtnTypes } from "../common/StoreLinks";
import Carousel from "../common/Carousel";
import constants from "../constants";

const Reviews: React.FC = () => {
  return (
    <section
      id="reviews"
      className="flex max-w-7xl flex-col items-center justify-between px-8 py-20 lg:m-auto lg:flex-row lg:px-12"
    >
      <article className="mb-10 flex flex-col items-center justify-center lg:w-1/2 lg:items-start">
        <h2 className="mb-4 max-w-[16ch] text-center text-4xl font-semibold text-gray-800 lg:w-full lg:text-left">
          Join the Growing Community of SwiftSail Users
        </h2>
        <StoreLinks type={BtnTypes.Standard} />
      </article>
      <Carousel slides={constants.SLIDES} />
    </section>
  );
};

export default Reviews;
