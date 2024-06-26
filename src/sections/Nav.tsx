import React from "react";
import { Disclosure } from "@headlessui/react";
import SwiftSailLogo from "../assets/logos/headerLogo.svg";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";
import ButtonLink from "../common/ButtonLink";
import constants from "../constants";

const Nav: React.FC = () => {
  return (
    <Disclosure as="nav">
      {({ open }) => (
        <>
          <div className="flex h-[15vh] max-w-7xl items-center justify-between px-8 lg:px-12 xl:mx-auto">
            <div className="flex">
              <ButtonLink
                link="#"
                children={
                  <div className="items mr-1 flex items-center">
                    <img className="h-auto w-10" src={SwiftSailLogo} />
                    <h1 className="text-2xl font-semibold text-gray-700 ">
                      SwiftSail
                    </h1>
                  </div>
                }
              />
              <div className="ml-4 hidden items-center  space-x-4 sm:ml-6 sm:flex lg:ml-8 lg:space-x-8">
                {constants.NAVLINKS.map(({ link, children }, index) => {
                  return (
                    <ButtonLink
                      link={link}
                      children={children}
                      key={index}
                      className="text-gray-500 hover:text-gray-900 active:text-gray-400"
                    />
                  );
                })}
              </div>
            </div>
            <ButtonLink
              link="https://play.google.com"
              target="_blank"
              className="active:bg-gra-600 hidden rounded-xl bg-gray-800 px-5 py-3 text-white hover:bg-gray-900 sm:flex"
              children="Install SwiftSail"
            />
            <Disclosure.Button className=" rounded-md p-2 text-gray-500 hover:bg-gray-700 hover:text-white sm:hidden">
              {open ? (
                <IoMdClose className="w block h-auto w-6" />
              ) : (
                <GiHamburgerMenu className="w block h-auto w-6" />
              )}
            </Disclosure.Button>
          </div>
          <Disclosure.Panel className="space-y-1 px-4 sm:hidden ">
            {constants.NAVLINKS.map(({ children, link }, index) => {
              return (
                <Disclosure.Button
                  key={index}
                  className="block"
                  as="a"
                  href={link}
                >
                  {children}
                </Disclosure.Button>
              );
            })}
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
};

export default Nav;
