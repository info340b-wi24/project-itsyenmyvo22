
import React from 'react';
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
            

            <div class="row g-1">
                <div class="col-12">
                    <h2 class="leader">World LeaderBoard</h2>
                </div>
                <div class="col-3">
                    <p>Rank</p>
                </div>
                <div class="col-3">
                    <p >Score</p>
                </div>
                <div class="col-3" >
                    <p >Avg Time</p>
                </div>
                <div class="col-3" >
                    <p >User</p>
                </div>
                
                <div class="col-3 leaderBack">
                    <p >1</p>
                </div>
                <div class="col-3 leaderBack">
                    <p>20</p>
                </div>
                <div class="col-3 leaderBack" >
                    <p>00:03:12</p>
                </div>
                <div class="col-3 leaderBack">
                    <p >Username</p>
                </div>

                <div class="col-3 leaderBack">
                    <p >2</p>
                </div>
                <div class="col-3 leaderBack">
                    <p >18</p>
                </div>
                <div class="col-3 leaderBack" >
                    <p>00:03:11</p>
                </div>
                <div class="col-3 leaderBack">
                    <p>Username</p>
                </div>
                <div class="col-3 leaderBack">
                    <p>3</p>
                </div>
                <div class="col-3 leaderBack">
                    <p>13</p>
                </div>
                <div class="col-3 leaderBack" >
                    <p>00:03:15</p>
                </div>
                <div class="col-3 leaderBack">
                    <p>Username</p>
                </div>
                <div class="col-3 leaderBack">
                    <p>4</p>
                </div>
                <div class="col-3 leaderBack">
                    <p>14</p>
                </div>
                <div class="col-3 leaderBack" >
                    <p>00:04:15</p>
                </div>
                <div class="col-3 leaderBack">
                    <p>Username</p>
                </div>
                <div class="col-3 leaderBack">
                    <p>5</p>
                </div>
                <div class="col-3 leaderBack">
                    <p>10</p>
                </div>
                <div class="col-3 leaderBack" >
                    <p>00:05:15</p>
                </div>
                <div class="col-3 leaderBack">
                    <p>Username</p>
                </div>
                <div class="col-3 leaderBack">
                    <p>6</p>
                </div>
                <div class="col-3 leaderBack">
                    <p>9</p>
                </div>
                <div class="col-3 leaderBack" >
                    <p>00:07:15</p>
                </div>
                <div class="col-3 leaderBack">
                    <p>Username</p>
                </div>
                <div class="col-3 leaderBack">
                    <p>7</p>
                </div>
                <div class="col-3 leaderBack">
                    <p>8</p>
                </div>
                <div class="col-3 leaderBack" >
                    <p>00:04:15</p>
                </div>
                <div class="col-3 leaderBack">
                    <p>Username</p>
                </div>
                <div class="col-3 leaderBack">
                    <p>9</p>
                </div>
                <div class="col-3 leaderBack">
                    <p>6</p>
                </div>
                <div class="col-3 leaderBack" >
                    <p>00:04:15</p>
                </div>
                <div class="col-3 leaderBack">
                    <p>Username</p>
                </div>
                <div class="col-3 leaderBack">
                    <p>10</p>
                </div>
                <div class="col-3 leaderBack">
                    <p>6</p>
                </div>
                <div class="col-3 leaderBack" >
                    <p>00:04:15</p>
                </div>
                <div class="col-3 leaderBack">
                    <p>Username</p>
                </div>
            </div>
        </div>
        </div>
    </div>
    </div>

    )
}