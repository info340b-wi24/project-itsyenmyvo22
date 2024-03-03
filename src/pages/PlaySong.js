
import React, {useEffect, useState} from 'react';
import audios from '../data/audios.json'
import useSound from "use-sound";
import { IconContext } from "react-icons"
import { AiFillPlayCircle, AiFillPauseCircle } from "react-icons/ai";
import { ComposeForm } from './ComposeForm';
import ProgressBar from 'react-bootstrap/ProgressBar';

export function PlaySong({audio,  points, countPoints, name}){
     
     const [isPlaying, setIsPlaying] = useState(false);
     const[play, {pause, duration, sound}] = useSound(audio);
     
     const [currTime, setCurrTime] = useState({
      sec: "",
    });
    const [seconds, setSeconds] = useState(0); 
   
      
    
    const sec = (duration / 1000) -1;
      const secRemain = Math.floor(sec % 60);
      const time = {
        sec: secRemain
    }; 
   

    useEffect(() => {
    
      const interval = setInterval(() => {
        if (sound) {
          setSeconds(sound.seek()); // setting the seconds state with the current state
          const sec = Math.floor(sound.seek([]) % 60);
          setCurrTime({
            sec
          });
        }
      }, 1000);


       return () => clearInterval(interval);
    }, [sound]);

    const playingButton = () => {
      console.log(currTime.sec);
      console.log(sec);
if(sec == currTime.sec + 2){
  console.log('hi');
  pause(); // play the audio
  setIsPlaying(false);
  console.log('hi');
}
     
      if (isPlaying) {
        pause(); // pause the audio
        setIsPlaying(false);
        ;
      } 
      else {
        play(); // play the audio
        setIsPlaying(true);
      }
     
    };
   
   

   
     return (
        <div className="row mb-4">
              
                        {/* <div className="row"> */}
                       
              <div className="col-2  mb-3">
    
                         
              <button className="playButton" onClick={playingButton}>
                <IconContext.Provider value={{ size: "3em", color: "#8F5EB1" }}>
                
                {isPlaying ? <AiFillPauseCircle /> : <AiFillPlayCircle />}
                </IconContext.Provider>
                </button>
        
              </div>
          <div className=" col-3 mt-3 mb-3">
                          
                          {/* <div> */}

        <input
          type="range"
          min="0"
          max={duration / 1000}
          default="0"
          value={seconds}
          className='seek_bar'
       onChange={(e) => setSeconds(parseInt(e.target.value))}

        />
        
      </div>
        
      {/* </div> */}
                          
                      
                          <div className="col-sm-12 col-md-12 col-lg-6">
                           
                              <ComposeForm name={name} points={points} countPoints ={countPoints} />
                          </div>
                                              
                                     
                        
                        </div>
                      // </div>
                      // </div>
                   
      )
    }

    