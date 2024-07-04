import React from "react";
import "./styles/App.css";
import { BrowserRouter } from "react-router-dom";
import MainRouter from "./router/MainRouter";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <MainRouter />
      </BrowserRouter>
    </div>
  );
}

export default App;
