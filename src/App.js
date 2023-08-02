import React from "react";

// if we use one by one import functionality then that is too Complax;
// import Project, {allocation,TestComponent,functional,testfunctions} from "./components/TestComponent";

// So that we use this process
import * as compObj from './components/TestComponent';

function App(){
    return (
      <div className="App">
        {/* <ol>
          <li>{Project}</li>
          <li>{allocation}</li>
          <li>{functional()}</li>
          <li>{testfunctions()}</li>
          <li><TestComponent /></li>
        </ol> */}

        <ol>
          <li>{compObj.default}</li>
          <li>{compObj.allocation}</li>
          <li>{compObj.functional()}</li>
          <li>{compObj.testfunctions()}</li>
          {/* <li><TestComponent /></li> */}
        </ol>


      </div>
    );
  }

export default App;
