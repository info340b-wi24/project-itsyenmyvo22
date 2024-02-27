import React, {useState} from 'react';
import { NavBar } from '../Navbar';
// import Home from '../pages/Home';
import Game from '../pages/Game';
import Calendar from '../pages/Calendar';
import Cards from '../pages/Cards';
import { Route, Routes, Switch} from "react-router-dom";
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
                <Route exact path = "/" element={<Home />}/>
                <Route path = "/Calendar" element = {<Calendar />} />
                <Route path = "/Game" element = {<Game />} />
                <Route path = "/Cards" element = {<Cards />}/>
                 {/* <Route path="/" exact component={<Game />} /> */}
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
function Home(props) {
    return (
    <body>
      <main>
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
              <a className="btn-sent" href="sent-requests.html" id="sent">Sent Trade Request</a>
            </div>
            <div className="col">
              <div className="container-fluid">
                <img src="photos/home/army-ocean.png" alt="background for incoming requests button" />
              </div>
              <a className="btn-incoming" href="incoming-requests.html" id="incoming">Incoming Trade Request</a>
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
      </main>
    </body>
    )
}


export default App;