import React, { useState } from "react";
import "./index.css";
function Form() {
  const [name, chnageName] = useState("");
  const [full_name, setFullName] = useState("");
  const setValue = (event) => {
    chnageName(event.target.value);
  };
  const formSubmit = (event) => {
    event.preventDefault();
    setFullName(name);
    chnageName("");
  };
  return (
    <>
      <div style={{ margin: 100 }}>
        <form onSubmit={formSubmit}>
          <h1>Hello {full_name}</h1>
          <input
            type="text"
            style={{ color: "blue", padding: 10 }}
            placeholder="please enter your name"
            onChange={setValue}
            value={name}
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
