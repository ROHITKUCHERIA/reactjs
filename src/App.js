import React from "react";

import Project, {allocation,TestComponent,functional,testfunctions} from "./components/TestComponent";

function App(){
    return (
      <div className="App">
        <ol>
          <li>{Project}</li>
          <li>{allocation}</li>
          <li>{functional()}</li>
          <li>{testfunctions()}</li>
          <li><TestComponent /></li>
        </ol>

      </div>
    );
  }

export default App;
