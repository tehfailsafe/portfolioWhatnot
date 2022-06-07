import type { Typography } from ".";

export const Headline2: React.FC<Typography> = ({ children, className }) => {
  return <h1 className={`headline-2 text text-color ${className}`}>{children}</h1>;
};
