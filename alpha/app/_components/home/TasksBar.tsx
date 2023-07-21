import React from "react";

interface Props {
  handleBack: () => void;
}

const TasksBar: React.FC<Props> = ({ handleBack }) => {
  return <div className="fixed top-0 right-0">TasksBar</div>;
};

export default TasksBar;
