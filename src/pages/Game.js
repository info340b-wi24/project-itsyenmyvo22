import React, {useEffect, useState} from 'react';
import { Link } from 'react-router-dom';
import _ from 'lodash';

import {PlaySong} from './PlaySong.js';

import audios from '../data/audios.json'
// import useSound from "use-sound";
// import { IconContext } from "react-icons"
// import { AiFillPlayCircle, AiFillPauseCircle } from "react-icons/ai";
export default function Game(props){

let song = audios.map(function(song){
  let aud = song.audio;
  return (
    <PlaySong audio={aud} key={song.key}/>
  )
})

    return(
        <div>
        <h1>Guess the Song</h1>
    

        <div className="jumbotron">
          <p className="lead">Instructions: Play the song clip. Then, type the song title with proper uppercase and spaces.</p>
         </div>
      
      
      <section id="musicPlayer">
          
  
  
       <div className="container">

        
        {song}
       
        

           
         
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

