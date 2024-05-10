import { RxCross2 } from "react-icons/rx";

const InputData = ({inputDiv, setInputDiv}) => {
  return (
    <>
      <div className={`${inputDiv} top-0 left-0 bg-gray-800 opacity-50 h-screen w-full`}></div>
      <div className={`${inputDiv} top-0 left-0 flex items-center justify-center h-screen w-full`}>
        <div className="w-2/6 bg-slate-900  p-4 rounded-lg">
          <div className="flex justify-end">
            <button className="text-xl" onClick={()=> setInputDiv("hidden")}><RxCross2 /></button>
          </div>
          <input
            type="text"
            placeholder="Title"
            name="title"
            className="px-3 py-2 rounded w-full my-3"
          ></input>
          <textarea
            name="desc "
            cols="30"
            rows="10"
            placeholder="Discription..."
            className="px-3 py-2 rounded w-full my-3 text-white"
          ></textarea>
          <input type="date" className="rounded mr-80 mb-4 text-gray-800"/>
          <button className="px-3 py-2 bg-blue-500 rounded text-black text-xl">
            Submit
          </button>
        </div>
      </div>
    </>
  );
};
export default InputData;
