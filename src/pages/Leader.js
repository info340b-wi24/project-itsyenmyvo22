
import React from 'react';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';


export default function Leader(props){
  
    
    return(
        <div>
        <h1 id="congrat">Congrats!</h1>
<div className= "container" id="back">
    <div class="row"> 
        <div class="col-sm-12 col-lg-4 gx-5"> 
         
{/* result */}

            <div class="row">
               
                <div class="col-6">
                    <p class="colTitle">Score:</p>
                </div>
                <div class="col-6">
                    <p class="colTitle">Average Time/Song:</p>
                </div>
                <div class="col-6 purple-bg">
                    <p>18</p>
                </div>
                <div class="col-6 purple-bg">
                    <p>00:07:34</p>
                </div>
            </div>
            <div class="row mt-5 desktopPlay">
               
                <div class="col-lg-12 difScore">
                    <p>Want a Different Score?</p>
                </div>
                <div class="col-lg-12 mt-2 playagain ">
                    <div class="playagain">
                        
                    <Link class="member-btn trade" to='/Game'> Play Again </Link>
                </div>
                
                </div>
            </div>
        </div>
        
        
        <div class="col-sm-12 col-lg-7"> 
            {/* <!-- leaderboard --> */}
            

            <div class="row">
                <div class="col-12">
                    <h2 class="leader">World LeaderBoard</h2>
                </div>
          
           <table>
            <thead>
                <tr>
                    <th>Rank</th>
                    <th>Score</th>
                    <th>Avg Time</th>
                    <th>User</th>
                </tr>
            </thead>
            <tbody>
                <MakeRow rank= '1' score='20' time='00:03:12' user = 'Username'  />
                <MakeRow rank = '2' score= '19' time='00:03:12' user = 'Username' />  
                <MakeRow rank = '3' score= '19' time='00:03:12' user = 'Username' />  
                <MakeRow rank = '4' score= '19' time='00:03:12' user = 'Username' />  
                <MakeRow rank = '5' score= '19' time='00:03:12' user = 'Username' />  
                <MakeRow rank = '6' score= '19' time='00:03:12' user = 'Username' />  
            </tbody> 
            </table>
         
            </div>
            </div>  
                </div>
                </div>
                </div>
                


             
              


    )
}


function MakeRow({rank, score, time, user}){
    return(
      <tr>
            <td>{rank}</td>
            <td>{score}</td>  
            <td>{time}</td>
            <td>{user}</td>
        </tr>
    )
}