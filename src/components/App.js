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
        <header></header>
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
       
       
        </div>
    )
}

export default App;