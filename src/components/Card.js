import React from "react";

function Card(props){
    return (
        <>    
            <div className="card">
                <img className="card-img-top" src={props.imgsrc} alt="Cardcap"/>
                <div className="card-body">
                    <h5 className="card-title">{props.title}</h5>
                    <p className="card-text">{props.discription}</p>
                    <a href={props.buttonlink} className="btn btn-primary">Go somewhere</a>
                </div>
            </div>
        </>
    );
}

export default Card;