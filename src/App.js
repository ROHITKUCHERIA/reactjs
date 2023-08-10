import './App.css';
import { useState } from 'react';
import './index.css';

const App = () => {
  let time = new Date().toLocaleTimeString(); 
    const [count,ChangeStateCount] = useState(time);
    
    const IncN = () => {
      time = new Date().toLocaleTimeString(); 
      ChangeStateCount(time);
    }
    setInterval(IncN);
    return (
      <div className="App">
        <h1 className='heading'> Welcome to React Application</h1>

        <h1> {count}</h1><br/>
      </div>
    );
  }
  

export default App;
