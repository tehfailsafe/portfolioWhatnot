import type { Typography } from "./Typography";

export const Icon: React.FC<Typography> = ({ children, className }) => {
  return <div className={`material-symbols-outlined ${className}`}>{children}</div>;
};
