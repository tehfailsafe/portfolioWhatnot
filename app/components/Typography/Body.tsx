import type { Typography } from ".";

export const Body: React.FC<Typography> = ({ children, className }) => {
  return <div className={`text body text-color ${className}`}>{children}</div>;
};
