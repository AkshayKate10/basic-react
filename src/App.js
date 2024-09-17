import React, { useState } from "react";
import "./App.css";
import Main from "./components/Main";
import ForgetPassword from "./components/ForgetPassword";
import DataFromServer from "./components/DataFromServer";

function App() {
  const [userNameFromMain, setUserNameFromMain] = useState("");

  const getUserName = (userName) => {
    setUserNameFromMain(userName);
  };
  return (
    <div className="App">
      <Main getUserName={getUserName} />
      <ForgetPassword userNameFromMain={userNameFromMain} />
      <DataFromServer />
    </div>
  );
}

export default App;
