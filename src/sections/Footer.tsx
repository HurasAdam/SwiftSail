import React from "react";
import BrightSwiftSailLogo from "../assets/logos/headerLogoBright.svg";
import TwitterLogo from "../assets/logos/icons8-twitterx.svg";
import FacebookLogo from "../assets/logos/icons8-facebook.svg";
import LinkedinLogo from "../assets/logos/icons8-linkedin.svg";
import StoreLinks, { BtnTypes } from "../common/StoreLinks";
import ButtonLink from "../common/ButtonLink";

const Footer: React.FC = () => {
  return (
    <section className="bg-gray-800 ">
      <div className="flex max-w-7xl flex-col px-8 py-12 text-gray-300 lg:px-12 xl:m-auto">
        <div className="flex flex-col justify-between gap-12 md:flex-row md:gap-0">
          <ButtonLink
            link="#"
            children={
              <div>
                <div className="items mr-1 flex items-center">
                  <img
                    className="mr-1 h-auto w-10 "
                    src={BrightSwiftSailLogo}
                  />
                  <h1 className="text-2xl font-semibold text-gray-100 ">
                    SwiftSail
                  </h1>
                </div>
                <p>Start spending the smart way</p>
              </div>
            }
          />
          <div className="flex gap-10">
            <div className="flex flex-col gap-2">
              <p className="text-gray-400">Product</p>
              <a href="#">Overview</a>
              <a href="#">Features</a>
              <a href="#">Solutions</a>
              <a href="#">Contact</a>
              <a href="#">Releases</a>
            </div>

            <div className="flex flex-col gap-2">
              <p className="text-gray-400">Resources</p>
              <a href="#">Blog</a>
              <a href="#">Newsletter</a>
              <a href="#">Events</a>
              <a href="#">Help</a>
              <a href="#">Support</a>
            </div>
          </div>

          <div className="w-fit">
            <h2>Get the app</h2>
            <StoreLinks type={BtnTypes.Variant} />
          </div>
        </div>
        <div className="mt-14 flex justify-between border-t-2 border-t-gray-700 pt-10">
          <p className="w-[16ch] text-gray-400 md:w-full">
            &copy;2024 SwiftSail
          </p>
          <div className="flex gap-6">
            <a href="https://www.twitter.com" target="_blank">
              <img src={TwitterLogo} alt="Twitter logo" />
            </a>

            <a href="https://www.facebook.com" target="_blank">
              <img src={FacebookLogo} alt="Facebook logo" />
            </a>

            <a href="https://www.linkedin.com" target="_blank">
              <img src={LinkedinLogo} alt="Linkedin logo" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
