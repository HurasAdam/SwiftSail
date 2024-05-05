import React from "react";

interface IButtonLinkProps {
  children?: React.ReactNode;
  link: string;
  className?: string;
  target?: string;
}

const ButtonLink: React.FC<IButtonLinkProps> = ({
  link,
  children,
  className,
  target,
}) => {
  return (
    <a href={link} className={className} target={target}>
      {children}
    </a>
  );
};

export default ButtonLink;
