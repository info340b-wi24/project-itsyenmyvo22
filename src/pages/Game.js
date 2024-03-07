import React, { useState} from 'react';
import { Link } from 'react-router-dom';
import {PlaySong} from './PlaySong.js';
import {getStorage, ref as storageRef, uploadBytes, getDownloadURL } from 'firebase/storage';

//import audios from '../data/audios.json'

export default function Game({points, countPoints}){
  
  const audios =["audios/bloodsweatandtears.mp3", "audios/boywithlove.mp3", "audios/butter.mp3"
,"audios/dna.mp3", "audios/dynamite.mp3", "audios/fakelove.mp3","audios/fire.mp3", "audios/idol.mp3"
,"audios/micdrop.mp3", "audios/springday.mp3" ]
  
  audios.map(async function uploadFile(audio) {
    const storage = getStorage();
    const fileRef = storageRef(storage, audio);
  
    try { //try/catch to handle errors
      await uploadBytes(fileRef) //asynchronous upload
      const url = await getDownloadURL(fileRef); //asynch query for public URL
      //...do something with the url, such as set it to state for rendering
      //...or save that url in the realtime database
    } catch (err) {
      console.log(err); //log any errors for debugging
    }
  })

  
 
  
  
  
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

