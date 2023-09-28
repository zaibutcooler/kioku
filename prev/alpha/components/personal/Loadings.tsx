export const DiaryLoading = () => {
  const arr = ["", "", "", "", ""];
  return (
    <div>
      {arr.map((item, index) => (
        <div className="p-1 mb-2 animate-pulse">
          <div className="h-5 w-full bg-gray-100 rounded-md mb-1" />
          <div className="flex justify-end">
            <div className="h-4 w-1/2 bg-gray-100 rounded-md" />
          </div>
        </div>
      ))}
    </div>
  );
};
