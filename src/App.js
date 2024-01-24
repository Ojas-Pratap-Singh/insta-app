import React,{useState} from "react";
import Signup from "./Components/Signup";
import "./style.css"
import Login from "./Components/Login";
import DashBoard from "./Components/Dashboard";

const App = () => {
  const [token ,setToken] = useState("")

  return (
    <div>
      <Signup setToken={setToken}/>
      < Login setToken={setToken}/>
      <DashBoard token={token}/>
    </div>
  );
};

export default App;
