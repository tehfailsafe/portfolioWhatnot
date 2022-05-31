interface Props {
  title: string;
  href: string;
  thumbnail: string;
}

export const Project: React.FC<Props> = (props) => {
  const { title, href, thumbnail } = props;

  return (
    <div className="flex-1">
      <img src={thumbnail} />
      <h5 className="text-blue-500">{title}</h5>
    </div>
  );
};
