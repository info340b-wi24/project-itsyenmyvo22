
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

    