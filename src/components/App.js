import React, {useState, useEffect} from 'react';
import { NavBar } from './Navbar';
import Home from '../pages/Home';
import Game from '../pages/Game';
import { Calendar, DefaultCalendarTable, CalendarTable } from '../pages/Calendar';
import Cards from '../pages/Cards';
import { Route, Routes, Navigate, BrowserRouter, Switch} from "react-router-dom";
import Leader from '../pages/Leader';
import IncomingRequests from '../pages/incoming-requests';
import SentRequests from '../pages/sent-requests';
import { Link } from 'react-router-dom';
import TradeRequest from "../pages/TradeRequest";
import {Accept} from "../pages/Accept";
import AddCard from '../pages/add-card';
import { getAuth, EmailAuthProvider, GoogleAuthProvider, signInWithEmailAndPassword, onAuthStateChanged, signOut } from 'firebase/auth'
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import Login from './Login';

function App(props){
    const [currentUser, setCurrentUser] = useState(null);
    const[points, setPoints] = useState(0);

    useEffect(() => {
        const auth = getAuth();

        onAuthStateChanged(auth, (firebaseUser) => {
            if (firebaseUser) {
                console.log("signing in as", firebaseUser.displayName)
                setCurrentUser(firebaseUser);
            } else {
                console.log("signed out");
                setCurrentUser(null);
            }
        })

    }, []);
    
    function countPoints(){
        let newPoints = points +10
        setPoints(newPoints);
        console.log(points);
    }

    const handleSignOut = (event) => {
        //sign out here
        signOut(getAuth());
    }

    return (
        <div>
            {currentUser ? (
                            <div className='footer-bottom'>              
                                <header>
                                    <div className="overlap">
                                        <Link to="/">  <img src="photos/logo.png" alt="ArmyBase logo of a purple whale" height="120" width="130"></img></Link>
                                    </div>
                                </header>
                
                                <NavBar />

                                <div className='container'>
                                    <Routes>
                                        <Route index="/Home" element={<Home />} />
                                        <Route path="/add-card" element={<AddCard />} />
                                        <Route path="/Calendar" element={<Calendar />} >
                                            <Route path=':currMonth' element={<CalendarTable />} />
                                            <Route index element = {<DefaultCalendarTable />} />
                                        </Route>
                                        <Route path="/Game" element={<Game countPoints={countPoints} points ={points} />} />
                                        <Route path="/Cards" element={<Cards />} />
                                        <Route path="/Leader" element={<Leader points ={points} />} />
                                        <Route path="/incoming-requests" element={<IncomingRequests /> } />
                                        <Route path="/sent-requests" element={<SentRequests /> } />
                                        <Route path="/TradeRequest" element={<TradeRequest />} />
                                        <Route path="/Accept" element={<Accept />} />
                                        <Route path="/Cards" element={<Cards />} />
                                    </Routes>      
                                </div>
                            </div>
                ) : (
                // Render the login component here when there is no current user
                <Login />
            )}

            <footer className='footer'>
                <p> &copy; 2024 ARMY BASE  All Rights Reserved</p>
                <p> Created By Yenmy Vo, Stephanie Liu, Natalie Hinds, and Carmen Weatherman</p>
            </footer>
        </div>

        // <div>
        //     <Login/>
        //     <div className='footer-bottom'>              
        //         <header>
        //             <div className="overlap">
        //                 <Link to="/">  <img src="photos/logo.png" alt="ArmyBase logo of a purple whale" height="120" width="130"></img></Link>
        //             </div>
        //         </header>
                
        //         <NavBar />

        //         <div className='container'>
        //             <Routes>
        //                 <Route index="/Home" element={<Home />} />
        //                 <Route path="/add-card" element={<AddCard />} />
        //                 <Route path="/Calendar" element={<Calendar />} >
        //                     <Route path=':currMonth' element={<CalendarTable />} />
        //                     <Route index element = {<DefaultCalendarTable />} />
        //                 </Route>
        //                 <Route path="/Game" element={<Game countPoints={countPoints} points ={points} />} />
        //                 <Route path="/Cards" element={<Cards />} />
        //                 <Route path="/Leader" element={<Leader points ={points} />} />
        //                 <Route path="/incoming-requests" element={<IncomingRequests /> } />
        //                 <Route path="/sent-requests" element={<SentRequests /> } />
        //                 <Route path="/TradeRequest" element={<TradeRequest />} />
        //                 <Route path="/Accept" element={<Accept />} />
        //                 <Route path="/Cards" element={<Cards />} />
        //             </Routes>      
        //         </div>
        //     </div>

        //     <footer className='footer'>
        //         <p> &copy; 2024 ARMY BASE  All Rights Reserved</p>
        //         <p> Created By Yenmy Vo, Stephanie Liu, Natalie Hinds, and Carmen Weatherman</p>
        //     </footer>               
        // </div>
    )
}


export default App;