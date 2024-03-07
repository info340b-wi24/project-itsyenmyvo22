import React, { useEffect, useState} from 'react';
import { Link } from 'react-router-dom';
import {PlaySong} from './PlaySong.js';
import {getStorage, ref as storageRef, uploadBytes, getDownloadURL } from 'firebase/storage';
import { child, getDatabase, ref, push as dbPush, set as firebaseSet, onValue } from 'firebase/database';
import audios from '../data/audios.json'

export default function Game({points, countPoints}){

  
  
  const [start, setStart] = useState(false);

 const handleStart = () => {
      setStart(true);
  }


let song = audios.map(function(song){
  let aud = song.audio;
  
  
  return (
    <PlaySong audio={aud} name={song.songname} key={song.key} points={points} countPoints ={countPoints}/>

   
  )
})

    return(
        <div>
        <h1>Guess the Song</h1>
    

        <div className="jumbotron start">
          <p className="lead">Instructions: Play the song clip. Then, type the song title with proper spaces. (case insensitive and no special characters).</p>
         {start? '': (<button className="member-btn trade " onClick={handleStart} aria-label= "start game"> Press to Start</button>)}
         
         </div>
      
        
      <section id="musicPlayer">
          
  
  {start? ( <div className="container">

{song}

</div>): (<div/>)}
      
        <div className="row leader">
          <div className="col-6 mx-auto my-4 leader">
            <Link to='/Leader' className="member-btn trade" aria-label="view leaderboard"> View Results & Leadboard </Link>
          </div>
         </div>
   
            
         
        
          
    
      
       </section> 
      </div>
    )
}

