
import React, { useState} from 'react';
export function ComposeForm(props){
 let countPoints = props.countPoints;
    const [typedValue, setTypedValue] = useState("");
   const [isCorrect, setIsCorrect] = useState(null);

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
        countPoints();
      
      }else if(currQ === true){
        setIsCorrect(false);
    
      }

        setCurrQ(false);
      
      
      
    }
    return(
    <form onSubmit={handleSubmit} className="input-group">
    <div className="col-9" >

   {currQ? (<textarea className= 'form-control' aria-label="Write name of song" placeholder="Type name of song" onChange={handleChange} value={typedValue}></textarea>
    ): (<textarea className={isCorrect?'highlightAnswer form-control': 'form-control wrong'} aria-label="Write name of song" value={typedValue}></textarea>)
    }
  
   
   </div>

      <div className="mx-2 col-1">
         <button className= {currQ? ("member-btn"): ("submitted")} type ="submit" aria-label= "submit">
        <span  aria-label="submit">Submit</span>
        </button> 
        
      </div>
     
   
   </form>)
   }