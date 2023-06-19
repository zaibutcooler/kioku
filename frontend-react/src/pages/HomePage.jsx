import React from "react";

const HomePage = () => {
  const mainTasks = [
    { id: 1, title: "Task 1", description: "Description for Task 1" },
    { id: 2, title: "Task 2", description: "Description for Task 2" },
    { id: 3, title: "Task 3", description: "Description for Task 3" },
    { id: 4, title: "Task 4", description: "Description for Task 4" },
    { id: 5, title: "Task 5", description: "Description for Task 5" },
  ];

  const otherTasks = [
    {
      id: 6,
      title: "Other Task 1",
      description: "Description for Other Task 1",
    },
    {
      id: 7,
      title: "Other Task 2",
      description: "Description for Other Task 2",
    },
    {
      id: 8,
      title: "Other Task 3",
      description: "Description for Other Task 3",
    },
  ];

  return (
    <div className="bg-gray-100 min-h-screen p-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-2xl font-semibold mb-4">Main Card 1</h2>
            <ul className="space-y-4">
              {mainTasks.map((task) => (
                <li key={task.id}>
                  <p className="text-lg font-medium">{task.title}</p>
                  <p className="text-gray-600">{task.description}</p>
                </li>
              ))}
            </ul>
            <a href="#" className="text-blue-500 hover:underline mt-6 block">
              View All Tasks
            </a>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-2xl font-semibold mb-4">Main Card 2</h2>
            <ul className="space-y-4">
              {mainTasks.map((task) => (
                <li key={task.id}>
                  <p className="text-lg font-medium">{task.title}</p>
                  <p className="text-gray-600">{task.description}</p>
                </li>
              ))}
            </ul>
            <a href="#" className="text-blue-500 hover:underline mt-6 block">
              View All Tasks
            </a>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-2xl font-semibold mb-4">Other Card 1</h2>
            <ul className="space-y-4">
              {otherTasks.map((task) => (
                <li key={task.id}>
                  <p className="text-lg font-medium">{task.title}</p>
                  <p className="text-gray-600">{task.description}</p>
                </li>
              ))}
            </ul>
            <a href="#" className="text-blue-500 hover:underline mt-6 block">
              View All Tasks
            </a>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-2xl font-semibold mb-4">Other Card 2</h2>
            <ul className="space-y-4">
              {otherTasks.map((task) => (
                <li key={task.id}>
                  <p className="text-lg font-medium">{task.title}</p>
                  <p className="text-gray-600">{task.description}</p>
                </li>
              ))}
            </ul>
            <a href="#" className="text-blue-500 hover:underline mt-6 block">
              View All Tasks
            </a>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-2xl font-semibold mb-4">Other Card 3</h2>
            <ul className="space-y-4">
              {otherTasks.map((task) => (
                <li key={task.id}>
                  <p className="text-lg font-medium">{task.title}</p>
                  <p className="text-gray-600">{task.description}</p>
                </li>
              ))}
            </ul>
            <a href="#" className="text-blue-500 hover:underline mt-6 block">
              View All Tasks
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
