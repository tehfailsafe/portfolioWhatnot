import { Link } from "@remix-run/react";

interface Props {
  to: string;
}

export const TextLink: React.FC<Props> = ({ children, to }) => {
  return (
    <Link className="textLink" to={to}>
      {children}
    </Link>
  );
};
