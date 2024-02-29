import React, {useState} from 'react';
import { NavBar } from '../Navbar';
import Home from '../pages/Home';
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
import AddCard from '../pages/add-card';




function App(props){




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
                        <Route index="/Home" element={<Home />}/>
                        <Route path="/add-card" element={<AddCard />}/>
                        <Route path="/Calendar" element={<Calendar />}/>
                        <Route path="/Game" element={<Game />}/>
                        <Route path="/Cards" element={<Cards />}/>
                        <Route path="/Leader" element={<Leader />}/>
                        <Route path="/incoming-requests" element={<IncomingRequests /> } />
                        <Route path="/sent-requests" element={<SentRequests /> }/>
                        <Route path="/TradeRequest" element={<TradeRequest/>}/>
                        <Route path="/Accept" element={<Accept/>}/>
                        <Route path="/Cards" element={<Cards/>}/>
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


export default App;