import React from "react";

interface IStoreLinkProps {
  link: string;
  className?: string;
  logo: string;
  UpperText: string;
  LowerText: string;
  target: string;
}

const StoreLink: React.FC<IStoreLinkProps> = ({
  link,
  logo,
  className,
  UpperText,
  LowerText,
  target,
}) => {
  return (
    <a href={link} className={className} target={target}>
      <img src={logo} alt={`${LowerText} logo`} className="h-auto w-5" />
      <div className="">
        <p className="text-xs">{UpperText} </p>
        <p>{LowerText}</p>
      </div>
    </a>
  );
};

export default StoreLink;
