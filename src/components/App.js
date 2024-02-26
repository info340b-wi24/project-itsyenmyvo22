import React, {useState} from 'react';
import { NavBar } from '../Navbar';
import Home from '../pages/Home';
import Game from '../pages/Game';
import Calendar from '../pages/Calendar';
import Cards from '../pages/Cards';
import { Route, Routes} from "react-router-dom";
import Leader from '../pages/Leader';

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
        <header>
        <div className="overlap">
            <img src="photos/logo.png" alt="ArmyBase logo of a purple whale" height="120" width="120"></img>
        </div>
    </header>  
        <NavBar />
        <div className='container'>
            <Routes>
                <Route path = "/Home" element = {<Home />} />
                <Route path = "/Calendar" element = {<Calendar />} />
                <Route path = "/Game" element = {<Game />} />
                <Route path = "/Cards" element = {<Cards />}/>
                  <Route path="/" exact component={<Game />} />
                <Route path="/Leader" element ={<Leader/>} />
            </Routes>
        </div>
       
            <footer>
        <p> &copy; 2024 ARMY BASE  All Rights Reserved</p>
        <p> Created By Yenmy Vo, Stephanie Liu, Natalie Hinds, and Carmen Weatherman</p>
    </footer>
 
        </div>
    )
}

export default App;