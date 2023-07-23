export const PageWrapper: React.FC = ({ children }) => {
  return (
    <div className="flex flex-col items-center p-6 z-10 relative">
      <div className="container">{children}</div>
    </div>
  );
};
