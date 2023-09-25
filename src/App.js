import React,{createContext} from 'react';
import CompA from './components/CompA';

const FirstName = createContext();

const App = ()=>{
  const currDate = new Date().toLocaleDateString();
  const currTime = new Date().toLocaleTimeString();

  return (
    <>
      <h1 className='heading'> Welcome to React Application</h1>
      <div className='time_div'>
        <h4>Current Date : {currDate}</h4><br/>
        <h4>Current Time : {currTime}</h4>
      </div>
      <div className='img_div'>
        <FirstName.Provider value={'Rohit'}>
          <CompA/>
        </FirstName.Provider>
      </div>
    </>
  );
}

export default App;
export { FirstName };
