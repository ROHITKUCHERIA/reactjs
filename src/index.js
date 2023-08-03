import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Card from './components/Card';

ReactDOM.render( 
  <>
  <Card 
    imgsrc = 'https://picsum.photos/200/200'
    title = 'Dark'
    discription = 'Some quick example text to build on the card title and make up the bulk of the cards contant'
    buttonlink = 'https://google.com'
  />
  <Card 
    imgsrc = 'https://picsum.photos/205/200'
    title = 'Lost In Space'
    discription = 'Some quick example text to build on the card title and make up the bulk of the cards contant'
    buttonlink = 'https://google.com'
  />
  <Card 
    imgsrc = 'https://picsum.photos/210/200'
    title = 'The 100'
    discription = 'Some quick example text to build on the card title and make up the bulk of the cards contant'
    buttonlink = 'https://google.com'
  />
  </>,
  document.getElementById("root")
);
