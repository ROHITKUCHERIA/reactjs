import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const name = 'rohit';
const lname = 'Kucheria'
var flag = '';
if(3<4){
    flag = 'true';
  }if(3>2){
    flag = 'false';
  }
  const currDate = new Date().toLocaleDateString();
  const currTime = new Date().toLocaleTimeString();
  const img1 = 'https://picsum.photos/400/300';
  const img2 = 'https://picsum.photos/500/300';
  const img3 = 'https://picsum.photos/600/400';
ReactDOM.render(
  <>
    <h1 className='heading'> Welcome to React Application</h1>
    <div className='time_div'>
      <h4>Current Date : {currDate}</h4><br/>
      <h4>Current Time : {currTime}</h4>
    </div>
    <div className='img_div'>
      <img src={img1} alt='img'/>
      <img src={img2} alt='img'/>
      <img src={img3} alt='img'/>
    </div>
    
    
  </>,
  document.getElementById("root")
);
