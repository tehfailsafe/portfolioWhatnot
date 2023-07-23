export const Grid = () => {
  return (
    <div className="absolute top-0 left-0 right-0 overflow-hidden z-0">
      {[...Array(100)].map((e, index) => (
        <div key={`grid_${index}`} className="h-2 border-red-500 border-b opacity-50" />
      ))}
    </div>
  );
};
