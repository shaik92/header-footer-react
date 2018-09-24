import React from "react";
import ReactDOM from "react-dom";
import Header from "./Header";
import Footer from "./Footer";
import { Panel } from "react-bootstrap";
import Checking from "./checking";

import "./styles.css";

function App() {
  return (
    <div className="App">
      <Header text=" Create Frst REact Program" />
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <Footer text="CopyRight 2018" />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<Checking />, rootElement);
