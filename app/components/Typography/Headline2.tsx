import type { Typography } from ".";
import { TextLink } from "./TextLink";

export const Headline2: React.FC<Typography> = ({ children, className, to }) => {
  return (
    <h1 className={`headline-2 text text-color ${className}`}>
      {to ? <TextLink to={to}>{children}</TextLink> : children}
    </h1>
  );
};
