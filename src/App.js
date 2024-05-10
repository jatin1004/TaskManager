import React from "react";
import Home from "./pages/Home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AllTasks from "./pages/AllTasks";
import ImportantTasks from "./pages/ImportantTasks";
import CompletedTasks from "./pages/CompletedTasks";
import IncompleteTasks from "./pages/IncomepleteTasks";


const App = () => {
  return (
    <div className="bg-gray-500 text-white h-screen p-2 relative">
      <Router>
        <Routes>
          <Route exact path="/" element={<Home/>}>
          <Route  index element={<AllTasks/>} />
          <Route  path="/importantTasks" element={<ImportantTasks/>} />
          <Route  path="/completedTasks" element={<CompletedTasks/>} />
          <Route  path="/incompleteTasks" element={<IncompleteTasks/>} />
          </Route>
        </Routes>
      </Router>
      
    </div>
  )
};

export default App;