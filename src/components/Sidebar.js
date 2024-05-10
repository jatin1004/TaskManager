import { CgNotes } from "react-icons/cg";
import { TbNotebookOff } from "react-icons/tb";
import { MdLabelImportant } from "react-icons/md";
import { RiCheckDoubleFill } from "react-icons/ri";
import { Link } from "react-router-dom";


const Sidebar = () => {
    const data = [
        {
            title: "All Tasks",
            icons: <CgNotes />,
            Link: "/",
        },
        {
            title: "Important Tasks",
            icons: <MdLabelImportant />,
            Link: "/importantTasks",
        },
        {
            title: "Completed Tasks",
            icons: <RiCheckDoubleFill />,
            Link: "/completedTasks",
        },
        {
            title: "Incompleted Tasks",
            icons: <TbNotebookOff />,
            Link: "/incompleteTasks",
        },

    ]
    return (
        <div className="flex flex-col">
            <div>
                <h2 className="text-xl font-semibold mb-24">Task Manager</h2> 
            </div>
            <div>
                {data.map((items, i) => (<Link to={items.Link} key={i} className="my-2 flex items-center hover:bg-black cursor-pointer rounded transition-all p-4">{items.icons    } {items.title}</Link>))}
            </div>
        </div>
    )
};

export default Sidebar;