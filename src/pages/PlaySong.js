
import React, {useEffect, useState} from 'react';
import audios from '../data/audios.json'
import useSound from "use-sound";
import { IconContext } from "react-icons"
import { AiFillPlayCircle, AiFillPauseCircle } from "react-icons/ai";
import { ComposeForm } from './ComposeForm';
import ProgressBar from 'react-bootstrap/ProgressBar';

export function PlaySong({audio, points, countPoints, name}){
      
     const [isPlaying, setIsPlaying] = useState(false);
     const[play, {pause, duration, ct}] = useSound(audio);
     
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
                          

        
      </div>
                          
                      
                          <div className="col-sm-12 col-md-6 col-lg-6">
                           
                              <ComposeForm name={name} points={points} countPoints ={countPoints} />
                          </div>
                                              
                                     
                        
                        </div>
                      </div>
                      // </div>
                   
      )
    }

    // export function Timeline({sound}) {
    //     const [currTime, setCurrTime] = useState({
    //       min: "",
    //       sec: "",
    //     }); 

    //     const [seconds, setSeconds] = useState(); 
    //     useEffect(() => {
    //         const sec = duration / 1000;
    //         const min = Math.floor(sec / 60);
    //         const secRemain = Math.floor(sec % 60);
    //         const time = {
    //           min: min,
    //           sec: secRemain
    //     }});
        
        
       
    // return(
      
    //     <div>
    //     <div className="time">
    //       <p>
    //         {currTime.min}:{CurrTime.sec}
    //       </p>
    //       <p>
    //         {currTime.min}:{currTime.sec}
    //       </p>
    //     </div>
    //     <input
    //       type="range"
    //       min="0"
    //       max={duration / 1000}
    //       default="0"
    //       value={seconds}
    //       className="timeline"
    //       onChange={(e) => {
    //         sound.seek([e.target.value]);
    //       }}
    //     />
    //   </div>
    // )
    //   }