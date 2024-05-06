import React from "react";
import StoreLink from "../common/StoreLink";
import StoreLinks from "../common/StoreLinks";
import Carousel from "../common/Carousel";

const Reviews: React.FC = () => {
  const slides = [
    {
      src: "https://images.unsplash.com/photo-1526948128573-703ee1aeb6fa?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8QXBwbGljYXRpb24lMjB1c2VyJTIwaGFwcHl8ZW58MHx8MHx8fDA%3D",
      text: "Kobodrop has helped me send and recive money with little to no complications. It's what everyone who wants to be on top of their money needs!",
      name: "Michael Smith",
      country: "Australia",
    },

    {
      src: "https://plus.unsplash.com/premium_photo-1661513711923-fa54cc993a37?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Njl8fFdvbWFuJTIwcGhvbmV8ZW58MHx8MHx8fDA%3D",
      text: "Kobodrop has been a game changer for my daily financial dealings. It allows for quick and secure money transfers, which saves me a lot of time and effort.",
      name: "Sarah Ming ",
      country: "Japan",
    },

    {
      src: "https://plus.unsplash.com/premium_photo-1682430336179-bc4742d4e8f8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzd8fE1hbiUyMHBob25lfGVufDB8fDB8fHww",
      text: "Kobodrop has helped me send and recive money with little to no complications. It's what everyone who wants to be on top of their money needs!",
      name: "Paul Turner",
      country: "USA",
    },
  ];

  return (
    <section
      id="reviews"
      className="flex max-w-7xl flex-col items-center justify-between px-8 py-20 lg:m-auto lg:flex-row lg:px-12"
    >
      <article className="mb-10 flex flex-col items-center justify-center lg:w-1/2 lg:items-start">
        <h2 className="mb-4 max-w-[16ch] text-center text-4xl font-semibold text-gray-800 lg:w-full lg:text-left">
          Join other thousand of people growing with Kobodrop
        </h2>
        <StoreLinks />
      </article>
      <Carousel slides={slides} />
    </section>
  );
};

export default Reviews;
