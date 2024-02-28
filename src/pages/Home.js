import React, {useState} from 'react';
import { Link } from 'react-router-dom';

export default function Home(props) {
    return (
    <div>
        <h1>Home</h1>
        <div className="container mobile-buttons" id="mobile-buttons">
        <div className="d-grid gap-2 col-6 mx-auto d-block d-md-none d-lg-none d-xl-none">
            <Link className="btn btn-light" to="/sent-requests" role="button">Sent Trade Request</Link>
            <Link className="btn btn-light" to="/incoming-requests" role="button">Incoming Trade Request</Link>
            {/* <a className="btn btn-light" href="#" role="button">Message Inbox</a> */}
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
            <div className="rectangle-home">
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