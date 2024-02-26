import React, {useState} from 'react';

export default function Home(props) {
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