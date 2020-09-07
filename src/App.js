import React from "react";
import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import { HackerNewsHome } from "./HackerNewsHome.js";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <HackerNewsHome />
      </header>
    </div>
  );
}

export default App;
