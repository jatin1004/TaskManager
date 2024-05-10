import { useRef } from "react";
import { IoClose } from "react-icons/io5";

const InputData = ({ inputDiv, setInputDiv }) => {
  const title = useRef();
  const descriptiondata = useRef();
  const dueDatedata = useRef();

  const handleButtonClick = () => {
    setInputDiv("hidden");
  };

  const handleSubmitClick = async () => {
    const res = await fetch(
      "https://taskmanager-backend-6o4x.onrender.com/tasks/",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: title.current.value,
          description: descriptiondata.current.value,
          dueDate: dueDatedata.current.value,
          completed: "false",
        }),
      }
    );
    console.log(res);
  };

  return (
    <>
      <div
        className={` ${inputDiv} top-0 left-0 bg-gray-800 opacity-60 h-screen w-full`}
      ></div>
      <div
        className={` ${inputDiv} top-0 left-0 flex items-center justify-center h-screen w-full`}
      >
        <div className="w-1/3 bg-gray-900 p-4 border">
          <div className="flex justify-end my-1">
            <button className="text-2xl" onClick={handleButtonClick}>
              <IoClose />
            </button>
          </div>
          <input
            ref={title}
            type="text"
            placeholder="Title"
            name="Title"
            className="p-2 my-2 rounded w-full bg-gray-600"
          />
          <textarea
            ref={descriptiondata}
            name="description"
            cols={10}
            rows={10}
            placeholder="Description"
            className="p-2 my-2 rounded w-full bg-gray-600"
          ></textarea>
          <input
            type="date"
            className="bg-gray-600 p-2 my-2 mr-80"
            ref={dueDatedata}
          />
          <button
            className="px-3 py-2 bg-blue-400 rounded text-black text-xl"
            onClick={handleSubmitClick}
          >
            Submit
          </button>
        </div>
      </div>
    </>
  );
};

export default InputData;