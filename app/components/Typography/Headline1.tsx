import type { Typography } from ".";

export const Headline1: React.FC<Typography> = ({ children, className }) => {
  return <h1 className={`headline-1 text text-color ${className}`}>{children}</h1>;
};
