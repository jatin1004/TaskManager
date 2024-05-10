import Cards from "../components/Cards";
import { IoMdAddCircleOutline } from "react-icons/io";
import InputData from "../components/InputData";
import { useState } from "react";

const AllTasks = () => {
    const [inputDiv, setInputDiv] = useState("hidden");
    return (
       <>
        <div>
            <div className="w-full flex justify-end px-4 py-2">
              <button onClick={()=> setInputDiv("fixed")}>
              <IoMdAddCircleOutline className="text-4xl"/>
              </button>
            </div>
            <Cards home={"true"} setInputDiv={setInputDiv}/>
        </div>
        <InputData inputDiv = {inputDiv} setInputDiv={setInputDiv}/>
       </>
    )
};

export default AllTasks;