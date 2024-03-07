
import React from 'react';
import { Link } from 'react-router-dom';
import { getDatabase } from 'firebase/database';
import { ref, set as firebaseSet, child, push as firebasePush, onValue} from 'firebase/database'
import {useEffect, useState} from 'react';
export default function Leader({points}){
    const[leaderboard, setLeaderBoard] = useState([]);
    useEffect(() => {
   
    const db = getDatabase();
    const leaderRef = ref(db, "leaderboard");
    const yenmyRef = child(leaderRef, "Yenmy")
    const natalieRef = child(leaderRef, "Natalie");
    const carmenRef = child(leaderRef, "Carmen");
    const stephRef = child(leaderRef, "Stephanie");
        const userRef = child(leaderRef, "username");
    firebaseSet(yenmyRef, {score:"100",  name:"Yenmy"})
    firebaseSet(natalieRef, {score:"50", name:"Natalie"})
    firebaseSet(carmenRef, {score:"60",  name:"Carmen"})
    firebaseSet(stephRef, {score:"90", name:"Stephanie"})
    const scory = {points}.points;
    console.log({scory});
    firebaseSet(userRef, {score: scory, name:"user" })
    .then(() => console.log("data saved successfully!"))
    .catch(err => console.log(err));
    
    const unregisterFunction = onValue(leaderRef, (snapshot) => {
        const leader = snapshot.val();
        const objKeys =  Object.keys(leader)
        const objArray = objKeys.map((keyString) => {
         
            leader[keyString].key = keyString;
            return leader[keyString];
           
    })

    objArray.sort((a,b)=>{
        return b.score -a.score;
  })
        setLeaderBoard(objArray);
     
 
    
    
      
    function cleanup(){
        unregisterFunction();
    }
    return cleanup;
})

}, [points])
   
  console.log(leaderboard) ;
    return(
        <div>
        <h1 id="congrat">Congrats!</h1>
    <div className="container" id="back">
    <div className="row"> 
        <div className ="col-sm-12 col-lg-4 gx-5"> 
         


            <div className="row">
               
                <div className="col-6">
                    <p className="colTitle">Score:</p>
                </div>
                <div className="col-6">
                    <p className="colTitle">Total Points:</p>
                </div>
                <div className="col-6 purple-bg">
                    <p>{points}</p>
                </div>
                <div className="col-6 purple-bg">
                    <p>100</p>
                </div>
            </div>
            <div className="row mt-5 desktopPlay">
               
                <div className="col-lg-12 difScore">
                    <p>Want a Different Score?</p>
                </div>
                <div className="col-lg-12 mt-2 playagain ">
                    <div className="playagain">
    
                    <Link className="member-btn trade" to='/Game'> Play Again </Link>
                </div>
                
                </div>
            </div>
        </div>
        
        
        <div className="col-sm-12 col-lg-7"> 
           
            

            <div className="row">
                <div className="col-12">
                    <h2 className="leader" >LeaderBoard</h2>
                </div>
          
           <table>
            <thead>
                <tr>
                    <th>Rank</th>
                    <th>Score</th>
                    <th>User</th>
                </tr>
            </thead>
            <tbody onClick={useEffect}>

            {leaderboard.map((entry, index) => (
                <MakeRow key={index} rank={index+1 }  score ={entry.score} user={entry.name} />
                    ))}
               
            </tbody> 
            </table>
         
            </div>
            </div>  
        </div>
        </div>
        </div>
                


             
              


    )
}


function MakeRow({rank, score, user}){
    return(
      <tr>
            <td>{rank}</td>
            <td>{score}</td>  
            <td>{user}</td>
        </tr>
    )
}