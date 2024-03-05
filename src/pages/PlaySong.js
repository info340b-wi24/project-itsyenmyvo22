
import React, {useEffect, useState} from 'react';
// import audios from '../data/audios.json'
import useSound from "use-sound";
import { AiFillPlayCircle, AiFillPauseCircle } from "react-icons/ai";
import { ComposeForm } from './ComposeForm';


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


          if(currTime.sec === time.sec){
            setIsPlaying(false);
            pause();
          
          }
        }
      }, 1000);
    

       return () => clearInterval(interval);
    }, [sound, currTime.sec, pause, time.sec]);

  


    const playingButton = () => {

     
      if (isPlaying) {
        pause(); 
        setIsPlaying(false);
        
      } 
      else {
        play(); 
        setIsPlaying(true);
      }
     
    };
   
   

   
     return (
        <div className="row mb-4">
              
                       
                       
              <div className="col-2  mb-3">
    
                <button className="playButton" onClick={playingButton} aria-label="pause/play song">
                {isPlaying ? <AiFillPauseCircle /> : <AiFillPlayCircle />}
                </button>
         
              </div>
          <div className=" col-3 mt-3 mb-3">
                          

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
        
  
                          
                      
                          <div className="col-sm-12 col-md-12 col-lg-6">
                           
                              <ComposeForm name={name} points={points} countPoints ={countPoints} />
                          </div>
                                              
                                     
                        
                        </div>
                    
                   
      )
    }

    