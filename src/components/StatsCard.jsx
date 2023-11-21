

const StatsCard = ({ number, text, children }) => {
  return (
    <div className="h-40 flex flex-col items-center justify-center w-60">
      <div className="text-6xl">
      {children}
      </div>
      <p className="text-3xl">
        {number}
        </p>
        <p className="text-2xl">
      {text}
        </p>
    </div>
  );
};

export default StatsCard;
