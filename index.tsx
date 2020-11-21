import React from "react";
import { render } from "react-dom";

import Search from "./components/Search";
import Cities from "./components/Cities";

import "./style.css";

const App = () => {
  return (
    <main>
      <Search />
      <Cities />
    </main>
  );
};

render(<App />, document.getElementById("root"));
