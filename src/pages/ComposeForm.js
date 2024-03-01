
import React, {useEffect, useState} from 'react';
export function ComposeForm(props){
  
    const [typedValue, setTypedValue] = useState("");
   
    const handleChange = (event) => {
      const inputtedValue = event.target.value;
      setTypedValue(inputtedValue); 
    }
   
    const handleSubmit = (event) => {
      event.preventDefault();
      console.log("submitting", typedValue);
      setTypedValue(""); 
   
    }
    return(
    <form className="input-group" onSubmit={handleSubmit}>
    <div >
    <textarea className="form-control"  aria-label="Write name of song" placeholder="Type name of song" onChange={handleChange} value={typedValue}></textarea>
    </div>
      <div >
        <button className="member-btn trade" type ="submit">
        <span  aria-label="submit">Submit</span>
        </button> 
      </div>
     
   
   </form>)
   }