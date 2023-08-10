import './App.css';
import { useState } from 'react';
import './index.css';

// ******************************************* Array Destracturing **********************

// const arr = ['Rohit','Kucheria','HRMS'];

// const [first_name ,last_name,Project] = arr;   // Array Destracturing
// console.log(Project,last_name,first_name);

//************************************************************************************** */

const App = () => {
    const [count,ChangeStateCount] = useState(0);
    const IncN = () => {
      ChangeStateCount(count+1);
    }
    
    return (
      <div className="App">
        <h1 className='heading'> Welcome to React Application</h1>

        <h1> {count}</h1><br/>
        <button className='button1' onClick={IncN}> Click Me </button>
      </div>
    );
  }
  

export default App;
