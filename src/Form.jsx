import React, { useState } from "react";
import './index.css';
function Form(){
    const [name,chnageName] = useState();
    const [full_name,setFullName] = useState();
    const setValue = (event) => {
        chnageName(event.target.value);
        
    }
    const formSubmit = () =>{
        setFullName(name);
    }
    return(<>
    <div style={{margin : 100}}>
        <h1>Hello {full_name}</h1>
        <input type="text" style={{ color: 'blue', padding: 10 }} placeholder="please enter your name" onChange={setValue} value={name}/>
        <button className = 'button1' type="submit" style={{margin:10,padding:10}} onClick={formSubmit}>Submit</button>
        </div>
    </>);
}
export default Form;