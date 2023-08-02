import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';


  const time = new Date();
  const currDate = new Date().toLocaleDateString();
  const currTime = new Date().toLocaleTimeString();
  let currHours = time.getHours();
  let greeting = '';
  if(currHours >=1 && currHours <12){
    greeting = 'Good Morning !';
  }else if(currHours>=12 && currHours<=19){
    greeting = 'Good AfterNoon !';
  }else{
    greeting = 'Good Night !';
  }
  const img1 = 'https://picsum.photos/400/300';
  const img2 = 'https://picsum.photos/500/300';
  const img3 = 'https://picsum.photos/600/400';
ReactDOM.render(
  <>
    <div className='divBar'>
      <h1 className='heading'>Hello {greeting} <br/>Welcome to React Application</h1>
    </div>
    <div className='time_div'>
      <h4>Current Date : {currDate}</h4>
      <h4>Current Time : {currTime}</h4>
      <div className='img_div'>
      <img src={img1} alt='img'/>
      <img src={img2} alt='img'/>
      <img src={img3} alt='img'/>
    </div>
    </div>
    
  </>,
  document.getElementById("root")
);
