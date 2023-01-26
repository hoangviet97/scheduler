import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

const App = () => (
  <div className="bg-slate-600 text-sky-500">
    <h1>My React and TypeScript App! {new Date().toLocaleDateString()}</h1>
  </div>
);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
