import React from "react";
import Card from './Card';
import Const from './Const'

 const Netflix  = () => {
    // console.log(Const);
    return <Card
        key = {Const[0].id}
        buttonlink = {Const[0].buttonlink}
        title = {Const[0].title}
        discription = {Const[0].title}
        imgsrc  = {Const[0].imgsrc}
    />
 }
 export default Netflix;