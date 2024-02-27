import React, {useState} from 'react';
import { NavBar } from '../Navbar';
// import Home from '../pages/Home';
import Game from '../pages/Game';
import Calendar from '../pages/Calendar';
import Cards from '../pages/Cards';
import { Route, Routes, Switch} from "react-router-dom";
import Leader from '../pages/Leader';
import IncomingRequests from '../pages/incoming-requests';
import SentRequests from '../pages/sent-requests';
import { Link } from 'react-router-dom';
import TradeRequest from "../pages/TradeRequest";
import {Accept} from "../pages/Accept";


// function Outline(props){
//     let component;
//     switch(window.location.pathname){

    
//         case "/home":
//         component = <Home />
//         break
//         case "/game":
//             component = <Game />
//             break
//             case"/calendar":
//             component = <Calendar />
//             break
//             case "photo-cards":
//                 component = <Cards />
//                 break
               
//         }

//     return (
        
//         <div>
//         <header>
//         </header>
//          <NavBar/>
//           {component} 
          
//         </div>
//     )
// }

function App(props){

    // let component;
    // switch(window.location.pathname){

    
    //     case "/Home":
    //     component = <Home />
    //     break
    //     case"/Calendar":
    //     component = <Calendar />
    //     break
    //     case "/Game":
    //         component = <Game />
    //         break
           
    //         case "/Cards":
    //             component = <Cards />
    //             break
               
    //     }


    return (
        <div>            
            <div className='footer-bottom'>
                <header>
                    <div className="overlap">
                        <Link to="/">  <img src="photos/logo.png" alt="ArmyBase logo of a purple whale" height="120" width="120"></img></Link>
                    </div>
                </header>
                
                <NavBar />

                <div className='container'>
                    <Routes>
                        <Route exact path = "/" element={<Home />}/>
                        <Route path = "/Calendar" element = {<Calendar />} />
                        <Route path = "/Game" element = {<Game />} />
                        <Route path = "/Cards" element = {<Cards />}/>
                        <Route path = "/Leader" element = {<Leader />} />
                        <Route path = "/incoming-requests" element= { <IncomingRequests /> } />
                        <Route path = "/sent-requests" element= { <SentRequests /> } />
                        <Route path= "/TradeRequest" element= {<TradeRequest/>}/>
                        <Route path= "/Accept" element= {<Accept/>}/>
                        <Route path= "/Cards" element= {<Cards/>}/>
                    </Routes>      
                </div>
            </div>

            <footer className='footer'>
                <p> &copy; 2024 ARMY BASE  All Rights Reserved</p>
                <p> Created By Yenmy Vo, Stephanie Liu, Natalie Hinds, and Carmen Weatherman</p>
            </footer>               
        </div>
    )
}
function Home(props) {
    return (
    <div>
        <h1>Home</h1>
        <div className="container mobile-buttons" id="mobile-buttons">
        <div className="d-grid gap-2 col-6 mx-auto d-block d-md-none d-lg-none d-xl-none">
            <a className="btn btn-light" href="sent-requests.html" role="button">Sent Trade Request</a>
            <a className="btn btn-light" href="incoming-requests.html" role="button">Incoming Trade Request</a>
            <a className="btn btn-light" href="#" role="button">Message Inbox</a>
        </div>
        </div>

        <div className="row g-0 mx-0" id="desktop">
            <div className="col">
            <div className="container-fluid">
                <img src="photos/home/purple-clouds.png" alt="background for sent requests button" />
            </div>
            <Link to="/sent-requests" className="btn-sent" id="sent">Sent Trade Request</Link>
            </div>
            <div className="col">
            <div className="container-fluid">
                <img src="photos/home/army-ocean.png" alt="background for incoming requests button" />
            </div>
            <Link to="/incoming-requests" className="btn-incoming" id="incoming">Incoming Trade Request</Link>
            </div>
        </div>

        <section id="my-cards">
        <h2 className="cardh">My Cards</h2>
            <div className="container">
            <div className="rectangle">
                <div className="card">
                <div className="card-body">
                    <a href="add-card.html" className="card-link">Add card</a>
                </div>
                </div>
            </div>
            </div>
        </section>
    </div> 
    );
}


export default App;