import React from "react";
import "./App.css";
import Navbar from "./Components/Navbar";
import Dashboard from "./Components/Dashboard";
import Kanban from "./Components/Kanban";
const App = () => {
  const [sidebarOpen, setSidebarOpen] = React.useState(true);
  const sidebarToggle = () => {
    setSidebarOpen(!sidebarOpen);
  };
  
  return (
    <div className="App">
      <Navbar toggle={sidebarToggle} sidebarOpen={sidebarOpen} />
      <Dashboard sidebarOpen={sidebarOpen} />
      <Kanban sidebarOpen={sidebarOpen} />
    </div>
  );
};

export default App;
