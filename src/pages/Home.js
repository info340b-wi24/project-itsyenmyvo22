import React, {useState} from 'react';

export default function Home(props) {
    return (
    <body>
        <header>
            <div className="overlap">
                <img src="photos/logo.png" alt="ArmyBase logo of a purple whale" height="120" width="120" />
            </div>
        </header>  
      <nav className="site-navbar">
        <div className="container">
            <div className="row">
                <div className="col-sm-3 col-md-3 col-lg-3 col-xl-3 td">
          <a href="#">Home</a>
    
            </div>
            <div className="col-md-3 col-lg-3 col-xl-3 td">
          <a href="calendar.html">Calendar</a>
        </div>
        <div className="col-md-3 col-lg-3 col-xl-3 td">
          <a href="game.html">Guess the Song</a>
        </div>
        <div className="col-md-3 col-lg-3 col-xl-3 td">
          <a href="card-trading.html">Card Trading</a>
        </div>
        </div>
        </div>
      </nav>
    
     
        <nav className="navbar navbar-dark site-navbar" id="mobile">
         
     
          <button className="navbar-toggler ms-auto" type="button" id ="toggle" data-bs-toggle="collapse" data-bs-target="#n_bar" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon fas fa-bars fa-1x"><i
              className = "fas fa-bars fa-1x"></i></span>
        </button>
        
        <div className = "collapse navbar-collapse" id = "navbarSupportedContent1">
           <ul className = "navbar-nav mr-auto">
              <li className = "nav-item active">
                <a className = "nav-link" href="#">Home</a>
              </li>
              <li className = "nav-item">
                 <a className = "nav-link" href="card-trading.html">Card Trading</a>
              </li>
              <li className = "nav-item">
                <a className = "nav-link" href="game.html">Guess the Song</a>
              </li>
              <li className = "nav-item">
                <a className = "nav-link" href="calendar.html">Calendar</a>
              </li>
              
           </ul>
        </div>
       </nav>
      
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
     
        <footer>
          <p> &copy; 2024 ARMY BASE  All Rights Reserved</p>
          <p> Created By Yenmy Vo, Stephanie Liu, Natalie Hinds, and Carmen Weatherman</p>
      </footer>
     
    
    {/* <!-- source code for hamburger menu: https://dev.to/thejourneyville/bootstrap-51-navbar-and-hamburger-toggler-4m9h -->
    <script>
      let item = document.getElementById('navbarSupportedContent1');
      let button = document.getElementById('toggle');
      button.addEventListener('click', () => {
         if (item.style.display != "block") {
            item.style.display = "block";
         } else {
            item.style.display = "none";
         }
      })
    </script> */}
    </body>
    )
}