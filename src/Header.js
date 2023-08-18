import React, { useState } from "react";
import './index.css';

const Header = ()=>{
    let time = new Date().toLocaleTimeString();
    const [cTime,changeTime] = useState(time);

    const changeTimeFunction = () => {
        time = new Date().toLocaleTimeString();
        changeTime(time);
    }
    setInterval(changeTimeFunction);
    return(
    <>
        <div className="App">
            <h1 className='heading'> Welcome to React Application</h1>
            <h1> {cTime}</h1><br/>
        </div>
    </>
    );
}

export default Header;