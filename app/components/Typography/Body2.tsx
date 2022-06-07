import type { Typography } from ".";

export const Body2: React.FC<Typography> = ({ children, className, onClick }) => {
  return (
    <div className={`text body-2 text-color ${className}`} onClick={onClick}>
      {children}
    </div>
  );
};
