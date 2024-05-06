import React from "react";

interface ILogoWallProps {
  src1: string;
  src2: string;
  src3: string;
  alt1: string;
  alt2: string;
  alt3: string;
}

const LogoWall: React.FC<ILogoWallProps> = ({
  src1,
  src2,
  src3,
  alt1,
  alt2,
  alt3,
}) => {
  return (
    <article className=" mb-8 flex justify-center gap-8 text-center">
      <img src={src1} alt={alt1} className="h-auto w-20 md:w-36" />
      <img src={src2} alt={alt2} className="h-auto w-20 md:w-36" />
      <img src={src3} alt={alt3} className="h-auto w-20 md:w-36" />
    </article>
  );
};

export default LogoWall;
