import { CiHeart } from "react-icons/ci";
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md"; 
import { IoMdAddCircleOutline } from "react-icons/io";
import { useState } from "react";


const Cards = ({home, setInputDiv}) => {
    const data =[
        {
            title: "Project",
            desc: "I have to Submit my project before 17 may",
        
            status: "In Complete",
        },
        {
            title: "Assignment",
            desc: "I have to Submit my Assignment before 17 may",
            status: "Complete",
        },
        {
            title: "Fees",
            desc: "I have to Submit my Fees before 17 may",
            status: "In Complete",
        },
        {
            title: "abc",
            desc: "I have to Submit my abc before 17 may",
            status: "In Complete",
        },
        
    ];


    


    return <div className="grid grid-cols-4 gap-2 p-4">
        {data && data.map((items, i)=> (
            <div className="flex flex-col justify-between bg-slate-800 p-5 rounded-lg">
            <div >
                <h3 className="font-semibold text-lg">{items.title}</h3>
                <p className="text-gray-400 my-3">{items.desc}</p>
                <div>Date:</div>
                <div className="mt-4 w-full flex items-center ">
                    <button className={`${items.status=="In Complete"? "bg-red-600" : "bg-green-700"}  px-2 py-1 rounded-lg cursor-pointer w-3/6`}>
                        {items.status}
                    </button>
                    <div className="text-white flex p-2 w-3/6 text-xl justify-around">
                        <button><CiHeart /></button>
                        <button><FaEdit /></button>
                        <button><MdDelete /></button>
                    </div>
                </div>
            </div>
            </div>
        ))}
        {home=="true" && (<button className="flex flex-col justify-center items-center bg-slate-800 p-5 rounded-lg text-gray-300 hover:scale-105 hover:cursor-pointer transition-all" onClick={() => setInputDiv("fixed")}>
        <IoMdAddCircleOutline  className="text-5xl"/>
            <h2 className="text-2xl ">Add Task</h2>
         </button>) }
        
    </div>
};

export default Cards;