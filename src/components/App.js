import React, {useState} from 'react';
import { NavBar } from '../Navbar';
import Home from '../pages/Home';
import Game from '../pages/Game';
import Calendar from '../pages/Calendar';
import Cards from '../pages/Cards';



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
//                 component = <Card />
//                 break
               
//         }

//     return (
        
//         // <div>
//         // <header>
//         // </header>
//         //   {/* <NavBar/>
//         //   {component} */}
          
//         // </div>
//     )
// }

function App(props){

    let component;
    switch(window.location.pathname){

    
        case "/Home":
        component = <Home />
        break
        case"/Calendar":
        component = <Calendar />
        break
        case "/Game":
            component = <Game />
            break
           
            case "Cards":
                component = <Cards />
                break
               
        }


    return (
        <div>
        <header></header>
        <NavBar />
        {component}

        </div>
    )
}

export default App;