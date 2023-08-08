import React from "react";
import Card from './Card';
import Const from './Const'

// function view(val){
//     // console.log(val);
//     return (
//         <Card 
//             buttonlink = {val.buttonlink}
//             title = {val.title}
//             discription = {val.discription}
//             imgsrc = {val.imgsrc}
//         />
//     )
// }




// ****************************** Normal Function *******************
// function view(a+b){
//     return a+babel;
// } 

// ******************************* FAT Arrow Function **************

// const view = (a,b) => a+b ;    // True
// const view = (a,b) => { 
//     return a+b ;
// }                              // True
// ************************************************************************



function Movies(){
    return (
        <>
        {/* {console.log(Const)} */}
        {/* {Const.map(view)} */}

        {/* ***************************************************************************** */}
        {/* {Const.map(function view(val){
            return (
                <Card
                buttonlink = {val.buttonlink}
                title = {val.title}
                discription = {val.title}
                imgsrc  = {val.imgsrc}
                />
            )
        })} */}

        {/* **************************OR We can Use this way also ********************* */}

{Const.map((val,index) =>{
    console.log(index);
            return (
                <Card
                buttonlink = {val.buttonlink}
                title = {val.title}
                discription = {val.title}
                imgsrc  = {val.imgsrc}
                />
            )
        })}

{/* *********************************************************************************** */}
        </>
        
    );
}
export default Movies;