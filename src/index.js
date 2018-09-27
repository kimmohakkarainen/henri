import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";

import TyosopimusView from "./tyosopimusview";

function App() {
  return (
    <div className="App">
      <TyosopimusView />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
