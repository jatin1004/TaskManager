import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { IoAddCircle } from "react-icons/io5";
import { useEffect, useState } from "react";

const Cards = ({ home, setInputDiv }) => {
  const [data, setData] = useState([]);

  const fetchData = async () => {
    const res = await fetch(
      "https://taskmanager-backend-6o4x.onrender.com/tasks/"
    );
    const json = await res.json();
    setData(json);
  };

  useEffect(() => {
    fetchData();
  }, [data]);

  const handleButtonClick = () => {
    setInputDiv("fixed");
  };

  const handleEditButton = (id) => {
    // Handle edit logic
    console.log("Edit task with id:", id);
  };

  const handleDeleteButton = async (id) => {
    // Send DELETE request to delete task
    await fetch(`https://taskmanager-backend-6o4x.onrender.com/tasks/${id}`, {
      method: "DELETE",
    });
    // Remove the deleted task from state
    setData(data.filter((task) => task.id !== id));
  };

  return (
    <div className="grid grid-cols-4 gap-4 p-4">
      {data.map((task) => (
        <div
          key={task.id}
          className="flex flex-col justify-between border rounded-xl p-4"
        >
          <div>
            <h3 className="text-xl font-bold">{task.name}</h3>
            <p className="text-gray-400 my-2">{task.description}</p>
          </div>
          <div>Date: {task.dueDate?.slice(0, 10)}</div>
          <div className="mt-4 w-full flex items-center">
            <button
              className={`${
                task.completed ? "bg-green-500" : "bg-rose-500"
              } p-2 rounded-lg w-3/6`}
            >
              {task.status ? "Completed" : "Incomplete"}
            </button>
            <div className="w-3/6 p-2 text-2xl flex justify-around">
              <button onClick={() => handleEditButton(task._id)}>
                <FaEdit />
              </button>
              <button onClick={() => handleDeleteButton(task._id)}>
                <MdDelete />
              </button>
            </div>
          </div>
        </div>
      ))}
      {home && (
        <button
          className="flex flex-col justify-center items-center border rounded-xl p-4 hover:scale-105 transition-all duration-300 hover:bg-gray-800"
          onClick={handleButtonClick}
        >
          <IoAddCircle className="text-5xl" />
          <h2 className="text-2xl mt-4">Add Task</h2>
        </button>
      )}
    </div>
  );
};

export default Cards;