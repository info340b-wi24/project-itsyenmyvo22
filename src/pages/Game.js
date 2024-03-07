import React, { useEffect, useState} from 'react';
import { Link } from 'react-router-dom';
import {PlaySong} from './PlaySong.js';
import {getStorage, ref as storageRef, uploadBytes, getDownloadURL } from 'firebase/storage';
import { getDatabase, ref as dbRef, push as dbPush, set as firebaseSet } from 'firebase/database';
//import audios from '../data/audios.json'

export default function Game({points, countPoints}){
  
  const audios =["audios/bloodsweatandtears", "audios/boywithlove", "audios/butter"
,"audios/dna", "audios/dynamite", "audios/fakelove","audios/fire", "audios/idol"
,"audios/micdrop", "audios/springday" ]

 
useEffect(() => {
  const storage = getStorage();

  // Iterate over the array of audio files
  audios.map(async (audio, index) => {
      try {
          // Generate a unique file name for each audio file (you can customize this as per your requirements)
          const fileName = audio; // Assuming all files are MP3 format
// key = audio;
          // Create a reference to the storage location where you want to upload the audio file
          const fileRef = storageRef(storage, fileName);

          // Upload the audio file bytes to Firebase Storage
          await uploadBytes(fileRef, audio);
          //put in database
          
        const db = getDatabase(); //also put in database (for fun)
        const refString = fileName;
        
        const audioRef = dbRef(db, "audios/"+ fileName+"/mp3")
        firebaseSet(audioRef, audio);



          console.log(`Audio file ${index + 1} uploaded successfully.`);
      } catch (error) {
          console.error(`Error uploading audio file ${index + 1}:`, error);
      }
      <PlaySong audio={audioRef} name={song.songname} key={song.key} points={points} countPoints ={countPoints}/>
  });
})

// uploadAudios(audios);
  
  
  const [start, setStart] = useState(false);

 const handleStart = () => {
      setStart(true);
  }
// let song = audios.map(function(song){
//   let aud = song.audio;
  
  
//   return (
//     <PlaySong audio={aud} name={song.songname} key={song.key} points={points} countPoints ={countPoints}/>

   
//   )
// })

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

