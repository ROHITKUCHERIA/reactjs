import React,{ useContext } from 'react';
import { FirstName } from "../App";

const CompA =  ()=> {

const first_name = useContext(FirstName);
    return (
    <>
        <h1>My Name is {first_name}</h1>
    </>
    );
}
export default CompA;