import React, { useState } from "react";
import Goal from "../components/Goal";
import Accomplishment from "../components/Accomplishment";
import Failure from "../components/Failure";

import ToggleReflect from "../mini-com/ToggleReflect";

const GoalApp = () => {
  const [activeComponent, setActiveComponent] = useState([]);
  const handleViews = (buttonData) => {
    setActiveComponent(buttonData);
  };

  const renderComponents = () => {
    switch (activeComponent) {
      case 1:
        return <Goal />;
      case 2:
        return <Failure />;
      case 3:
        return <Accomplishment />;
      case 4:
        return <Goal />;
      default:
        return <Goal />;
    }
  };

  return (
    <div>
      <ToggleReflect selectedButton={handleViews} />
      <div>{renderComponents()}</div>
    </div>
  );
};

export default GoalApp;
