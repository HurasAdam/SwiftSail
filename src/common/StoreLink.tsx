import React from "react";

interface IStoreLinkProps {
  link: string;
  className?: string;
  logo: string;
  upperText: string;
  lowerText: string;
  target: string;
}

const StoreLink: React.FC<IStoreLinkProps> = ({
  link,
  logo,
  className,
  upperText,
  lowerText,
  target,
}) => {
  return (
    <a href={link} className={className} target={target}>
      <img src={logo} alt={`${lowerText} logo`} className="h-auto w-5" />
      <div className="">
        <p className="text-xs">{upperText} </p>
        <p>{lowerText}</p>
      </div>
    </a>
  );
};

export default StoreLink;
