import React from "react";
import { BrowserRouter } from "react-router-dom";
import LabsOpen from "./LabsOpen";

function App() {
  return (
    <div>
      {/* <h3>App Page</h3> */}
      <BrowserRouter>
        <LabsOpen />
      </BrowserRouter>
    </div>
  );
}

export default App;
