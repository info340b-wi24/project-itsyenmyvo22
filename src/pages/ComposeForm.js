
import React, {useEffect, useState} from 'react';
export function ComposeForm(props){
 let countPoints = props.countPoints;
    const [typedValue, setTypedValue] = useState("");
   const [isCorrect, setIsCorrect] = useState(null);
    const[points, setPoints] = useState(0);
    const[currQ, setCurrQ] = useState(true);
   const handleChange = (event) => {
      const inputtedValue = event.target.value;
      setTypedValue(inputtedValue); 
    }

    const handleSubmit = (event) => {
      event.preventDefault();
      console.log("submitting", typedValue);
      let ans = typedValue.toLowerCase();
      if(ans === props.name && currQ === true){
        setIsCorrect(true);
        // let newPoints = points +10
        // setPoints(newPoints);
        countPoints();
      
      }else if(currQ == true){
        setIsCorrect(false);
      }

        setCurrQ(false);
      
      
      
    }
    return(
    <form className="input-group" onSubmit={handleSubmit}>
    <div >

   
   {isCorrect?(<textarea className="form-control highlightAnswer"  aria-label="Write name of song" placeholder="Type name of song" onChange={handleChange} value={typedValue}></textarea>): (<textarea className="form-control wrong"  aria-label="Write name of song" placeholder="Type name of song" onChange={handleChange} value={typedValue}></textarea>)}
    </div>
      <div >
        {currQ?( <button className="member-btn trade" type ="submit">
        <span  aria-label="submit">Submit</span>
        </button> ):(<button className="submitted" type ="submit">
        <span  aria-label="submit">Submit</span>
        </button> )}
        
      </div>
     
   
   </form>)
   }