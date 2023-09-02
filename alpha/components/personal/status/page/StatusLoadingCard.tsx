const StatusLoadingCard = () => {
  const arr = ["", "", "", ""];

  return (
    <div>
      {arr.map((item, index) => (
        <div key={index} className="flex gap-3 animate-pulse">
          <section className="pr-2 mt-2 w-[110px]">
            <div className="py-2 w-full h-5 rounded-md bg-gray-100"></div>
            <div></div>
          </section>
          <section className="border-l-2 py-2 pl-3 w-full border-gray-300">
            <div
              className="p-2 border rounded-md w-full cursor-pointer"
              onClick={() => {}}>
              <h1 className="font-medium mb-2 h-5 rounded-md bg-gray-100 w-full"></h1>
              <p className="text-[0.7rem] text-gray-500 h-4 rounded-md bg-gray-100 w-full mb-1"></p>
              <p className="text-[0.7rem] text-gray-500 h-4 rounded-md bg-gray-100 w-full"></p>{" "}
            </div>
          </section>
        </div>
      ))}
    </div>
  );
};

export default StatusLoadingCard;
