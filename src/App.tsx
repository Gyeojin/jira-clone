import React from "react";
import "./App.css";
import "./css/common.css";
import NavHeader from "./common/organism/NavHeader";
import Main from "./pages/MainList";

function App() {
  return (
    <div className="App">
      <NavHeader />
      <Main />
    </div>
  );
}

export default App;
