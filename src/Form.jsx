import React, { useState } from "react";
import "./index.css";
function Form() {
  const [name, chnageName] = useState({
    fname : '',
    lname : '',
    email : '',
  });
  
  const setValue = (event) => {
    // const value = event.target.value;
    // const name = event.target.name;

    const {value, name} = event.target;

    chnageName((preValue) => {
      if(name === 'fname'){
        return {
          fname: value,
          lname: preValue.lname,
          email: preValue.email
        }
      }
      else if(name === 'lname'){
        return {
          fname: preValue.fname,
          lname: value,
          email: preValue.email
        }
      }
      else if(name === 'email'){
        return {
          fname: preValue.fname,
          lname: preValue.lname,
          email: value
        }
      }
    });
  };

  const formSubmit = (event) => {
    event.preventDefault();
    alert('Form Submited');
    chnageName({
      fname: '',
      lname: '',
      email: ''
    });
  };

  
  return (
    <>
      <div style={{ margin: 100}}>
        <form onSubmit={formSubmit}>
          <p style={{ textAlign:"center"}}><h1>My Name Is {name.fname} {name.lname}</h1>
          <h4>Email {name.email}</h4></p><br/><br/><br/>
          <p>First Name :</p><input
            type="text"
            style={{padding: 10,marginBlock:10}}
            placeholder="please enter your first name"
            onChange={setValue}
            value={name.fname}
            name="fname"
          />
          Last Name : <input
            type="text"
            style={{padding: 10,marginBlock:10 }}
            placeholder="please enter your last name"
            onChange={setValue}
            value={name.lname}
            name="lname"
          />
          Email : <input
            type="email"
            style={{padding: 10 ,marginBlock:10}}
            placeholder="please enter your email"
            onChange={setValue}
            value={name.email}
            name="email"
          />

          <button
            className="button1"
            type="submit"
            style={{ margin: 10, padding: 10 }}
          >
            Submit
          </button>
        </form>
      </div>
    </>
  );
}
export default Form;
