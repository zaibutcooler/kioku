import React, { useState } from "react";
import ToggleMemory from "../mini-com/ToggleMemory";
import Note from "../components/Note";
import Diary from "../components/Diary";
import Summary from "../components/Summary";

const MemoryPage = () => {
  const [activeComponent, setActiveComponent] = useState(null);
  const changeComponents = (buttonData) => {
    setActiveComponent(buttonData);
  };
  const renderComponent = () => {
    switch (activeComponent) {
      case 1:
        return <Note />;
      case 2:
        return <Diary />;
      case 3:
        return <Summary />;
      default:
        return <Note />;
    }
  };
  return (
    <div>
      <ToggleMemory selectedButton={changeComponents} />
      <div>{renderComponent()}</div>
    </div>
  );
};

export default MemoryPage;
