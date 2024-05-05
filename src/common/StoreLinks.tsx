import React from "react";
import AppleLogo from "../assets/logos/app_store.svg";
import GooglePlayLogo from "../assets/logos/google_play.svg";
import StoreLink from "../common/StoreLink";

const StoreLinks: React.FC = () => {
  return (
    <div className="mt-10 justify-center space-x-2 sm:flex md:justify-normal">
      <StoreLink
        link="https://www.apple.com/app-store"
        UpperText="Download on the"
        LowerText="App Store"
        logo={AppleLogo}
        target="_blank"
        className="flex gap-3 rounded-lg bg-zinc-900 px-4 py-3 text-white hover:bg-zinc-950 active:bg-zinc-800"
      />
      <StoreLink
        link="https://www.play.google.com"
        UpperText="Get it on"
        LowerText="Google Play"
        logo={GooglePlayLogo}
        target="_blank"
        className="flex gap-3 rounded-lg bg-zinc-900 px-4 py-3 text-white hover:bg-zinc-950 active:bg-zinc-800"
      />
    </div>
  );
};

export default StoreLinks;
