import { Link } from "@remix-run/react";

interface Props {
  title: string;
  href: string;
  thumbnail: string;
}

export const Project: React.FC<Props> = (props) => {
  const { title, href, thumbnail } = props;
  console.log(thumbnail);

  return (
    <Link to={href}>
      <div
        className="flex-1 bg-contain relative group"
        style={{
          backgroundImage: `url(${thumbnail})`,
          paddingBottom: `calc(9/16 * 100%)`,
        }}
      >
        <div className="flex items-center justify-center opacity-0 group-hover:opacity-100 absolute left-0 top-0 right-0 bottom-0  transition-all duration-300">
          <h5 className="text-white text-xl z-10">{title}</h5>
          <div className="bg-blue-500 w-full h-full absolute opacity-80"></div>
        </div>
      </div>
    </Link>
  );
};
