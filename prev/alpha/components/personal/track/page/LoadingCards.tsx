const LoadingCard = () => {
  const arr = ["", "", "", "", "", ""];

  return (
    <main>
      {arr.map((item, index) => (
        <div key={index}>
          {" "}
          <div className="mb-2 p-2 border rounded animate-pulse">
            <div className="w-full h-4 bg-gray-100 rounded"></div>
            <div className="mt-2 h-4 bg-gray-100 rounded"></div>
          </div>
        </div>
      ))}
    </main>
  );
};

export default LoadingCard;
