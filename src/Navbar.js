import React from 'react';
import ReactDOM from 'react-dom/client';
import './style.css';
import App from './components/App';


export function NavBar(props){
    return(
      
        <nav className="site-navbar">
    <div className="container">
        <div className="row">
            <div className="col-sm-3 col-md-3 col-lg-3 col-xl-3 td">
      <a href="#">Home</a>

        </div>
        <div className="col-md-3 col-lg-3 col-xl-3 td">
      <a href="/calendar">Calendar</a>
    </div>
    <div className="col-md-3 col-lg-3 col-xl-3 td">
      <a href="/game">Guess the Song</a>
    </div>
    <div className="col-md-3 col-lg-3 col-xl-3 td">
      <a href="/photo-cards">Card Trading</a>
    </div>
    </div>
    </div>
  </nav>
    )
// {/* <nav class="navbar navbar-dark site-navbar" id="mobile">
     
 
// <button class="navbar-toggler ms-auto" type="button" id ="toggle" data-bs-toggle="collapse" data-bs-target="#n_bar" aria-label="Toggle navigation">
//   <span class="navbar-toggler-icon fas fa-bars fa-1x"><i
//     Class = "fas fa-bars fa-1x"></i></span>
// </button>

// <div class = "collapse navbar-collapse" id = "navbarSupportedContent1">
//  <ul class = "navbar-nav mr-auto">
//     <li class = "nav-item active">
//       <a class = "nav-link" href="#">Home</a>
//     </li>
//     <li class = "nav-item">
//        <a class = "nav-link" href="card-trading.html">Card Trading</a>
//     </li>
//     <li class = "nav-item">
//       <a class = "nav-link" href="game.html">Guess the Song</a>
//     </li>
//     <li class = "nav-item">
//       <a class = "nav-link" href="calendar.html">Calendar</a>
//     </li>
    
//  </ul>
// </div>
// </nav> */



    
}
