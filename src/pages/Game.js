
import React, {useState} from 'react';
import { Link } from 'react-router-dom';
export default function Game(props){





    return(
        <div>
        <h1>Guess the Song</h1>
    

        <div className="jumbotron">
          <p className="lead">Instructions: Play the song clip. Then, type the song title all lowercase with no spaces.</p>
         </div>
      
      
      <section id="musicPlayer">
          
  
  
       <div className="container">
        <SongGuess />
        <SongGuess />
        <SongGuess />


           
         
        <div className="row leader">
          <div className="col-6 mx-auto my-4 leader">
            <Link to='/Leader' className="member-btn trade"> View Leadboard </Link>
          </div>
         </div>
   
            
         
        
          
    
       </div>
      </section>
      </div>
    )
}

export function SongGuess(props){
  return (
    <div className="row mb-4">
            <div className="col d-flex justify-content-center"> 
               {/* <!-- <div class="card" id="white-bg" > 
                 <div class="card-body d-flex" id="white-bg" >   --> */}
                    <div className="row">
                      <div className="col-auto">
                        <img src="photos/game/Play.png" alt="play audio"></img>
                      </div>
                      <div className="col-auto">
                       <img src="photos/game/Player.png" alt="song image"></img>
                      </div>
                      <div className="col-sm-12 col-md-3 col-lg-3">
                        {/* <form className="input-group">
                           <textarea className="form-control" aria-label="Write name of song"></textarea>
                          </form> */}
                          <ComposeForm />
                      </div>
                                          
                                 
                      {/* <div className="col">
                        <a className="member-btn trade" aria-label="submit">Submit</a>
                     </div> */}
                    </div>
                  </div>
                </div>
  )
}

 export function ComposeForm(props){
  
  const [typedValue, setTypedValue] = useState("");
 
  const handleChange = (event) => {
    const inputtedValue = event.target.value;
    setTypedValue(inputtedValue); //update state and re-render!
  }
 
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("submitting", typedValue);
    // props.addMessageCallback(typedValue)
    setTypedValue(""); 
 
  }
  return(
  <form className="input-group" onSubmit ={handleSubmit}>
  <textarea className="form-control" aria-label="Write name of song" placeholder="Type name of song" onChange = {handleChange} value={typedValue}></textarea>
    <div className="col">
      <button className="member-btn trade" type ="submit">
      <span  aria-label="submit">Submit</span>
      </button> 
    </div>
 
 </form>)
 }