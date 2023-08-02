import './App.css';
// import Greet from './components/functionalComponent';
import { Greet } from './components/functionalComponent';
import ClassComponent from './components/classComponent';
import { Component } from 'react';


class App extends Component{
  render() {
    const user = 'Rohit';
    return (
      <div className="App">
        <Greet></Greet>
        <ClassComponent />
        {user}
      </div>
    );
  }
  }
  

export default App;
