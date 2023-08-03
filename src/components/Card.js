import React from "react";

function Card(props){
    return (
        <>
            <div class="card">
                <img class="card-img-top" src={props.imgsrc} alt="Cardcap"/>
                <div class="card-body">
                    <h5 class="card-title">{props.title}</h5>
                    <p class="card-text">{props.discription}</p>
                    <a href={props.buttonlink} class="btn btn-primary">Go somewhere</a>
                </div>
            </div>
        </>
    );
}

export default Card;