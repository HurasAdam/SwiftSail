import React from "react";
import StoreLink from "../common/StoreLink";
import constants from "../constants";

export enum BtnTypes {
  Standard,
  Variant,
}
interface IStoreLinksProps {
  type: BtnTypes;
}

const StoreLinks: React.FC<IStoreLinksProps> = ({ type }) => {
  if (type === BtnTypes.Standard) {
    return (
      <div className="mt-10 justify-center space-x-2 sm:flex md:justify-normal">
        {constants.STORELINKS.map(({ link, upperText, lowerText, logo }) => {
          return (
            <StoreLink
              link={link}
              upperText={upperText}
              lowerText={lowerText}
              logo={logo}
              target="_blank"
              className="hidden gap-3  rounded-lg bg-zinc-900 px-4 py-3 text-white hover:bg-zinc-950 active:bg-zinc-800 sm:flex"
            />
          );
        })}
      </div>
    );
  }

  if (type === BtnTypes.Variant) {
    return (
      <>
        {constants.FOOTERSTORELINKS.map(
          ({ link, upperText, lowerText, logo }) => {
            return (
              <StoreLink
                link={link}
                upperText={upperText}
                lowerText={lowerText}
                logo={logo}
                target="_blank"
                className=" my-4 flex gap-3 rounded-lg border bg-transparent px-2 py-1 text-white hover:bg-zinc-950 active:bg-zinc-800"
              />
            );
          },
        )}
      </>
    );
  }
};

export default StoreLinks;
