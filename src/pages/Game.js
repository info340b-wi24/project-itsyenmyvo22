import React, {useEffect, useState} from 'react';
import { Link } from 'react-router-dom';
import ProgressBar from 'react-bootstrap/ProgressBar';
import audios from '../data/audios.json'
import useSound from "use-sound";
import { IconContext } from "react-icons"
import { AiFillPlayCircle, AiFillPauseCircle } from "react-icons/ai";
export default function Game(props){

    return(
        <div>
        <h1>Guess the Song</h1>
    

        <div className="jumbotron">
          <p className="lead">Instructions: Play the song clip. Then, type the song title all lowercase with no spaces.</p>
         </div>
      
      
      <section id="musicPlayer">
          
  
  
       <div className="container">
        <PlaySong />
       


           
         
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

export function PlaySong(props){
let soundy = audios[0].audio;
 const [isPlaying, setIsPlaying] = useState(false);
 const[play, {pause, duration, sound}] = useSound(soundy);
 
 const playingButton = () => {
  if (isPlaying) {
    pause(); // this will pause the audio
    setIsPlaying(false);
  } else {
    play(); // this will play the audio
    setIsPlaying(true);
  }
};
 return (
    <div className="row mb-4">
          
                    <div className="row">
                   
                      <div className="col-sm-1 col-md-1 col-lg-1 ">

                      {!isPlaying ? (
          <button className="playButton" onClick={playingButton}>
            <IconContext.Provider value={{ size: "3em", color: "#8F5EB1" }}>
              <AiFillPlayCircle />
            </IconContext.Provider>
          </button>
        ) : (
          <button className="playButton" onClick={playingButton}>
            <IconContext.Provider value={{ size: "3em", color: "#8F5EB1" }}>
              <AiFillPauseCircle />
            </IconContext.Provider>
          </button>
        )}
                      </div>
                      <div className="col-sm-4 col-md-4 col-lg-4 mb-3">
                        <Timeline />
                        </div>
                  
                      <div className="col-sm-12 col-md-6 col-lg-6">
                       
                          <ComposeForm />
                      </div>
                                          
                                 
                    
                    </div>
                  </div>
                  // </div>
               
  )
}

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

 export function Timeline() {
  const [currTime, setCurrTime] = useState({
    min: "",
    sec: "",
  }); 

  const [seconds, setSeconds] = useState(); 
  return <ProgressBar aria-label="progressbar" now={60} />;
  
}