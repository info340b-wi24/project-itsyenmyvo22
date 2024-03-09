import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import CardRender from '../components/CardRender';

export default function Home(props) {  
    const userId = props.userId;

    return (
    <div>
        <h1>Home</h1>
        <div className="container mobile-buttons" id="mobile-buttons">
        <div className="d-grid gap-2 col-6 mx-auto d-block d-md-none d-lg-none d-xl-none">
            <Link aria-label='sent requests page' className="btn btn-light" to="/sent-requests" role="button">Sent Trade Request</Link>
            <Link aria-label='incoming requests page' className="btn btn-light" to="/incoming-requests" role="button">Incoming Trade Request</Link>
            {/* <a className="btn btn-light" href="#" role="button">Message Inbox</a> */}
        </div>
        </div>

        <div className="row g-0 mx-0" id="desktop">
            <div className="col">
            <div className="container-fluid">
                <img src="photos/home/purple-clouds.png" alt="background for sent requests button" />
                <Link aria-label='sent requests page' to="/sent-requests" className="btn-sent" id="sent">Sent Trade Request</Link>
            </div>
            </div>
            <div className="col">
            <div className="container-fluid">
                <img src="photos/home/army-ocean.png" alt="background for incoming requests button" />
                <Link aria-label='incoming requests page' to="/incoming-requests" className="btn-incoming" id="incoming">Incoming Trade Request</Link>
            </div>
            </div>
        </div>

        <section id="my-cards">
        <h2 className="cardh">My Cards</h2>
            <div className="container">
            <div className="rectangle-home">
                <div className="card">
                <div className="card-body">
                    <Link aria-label='add card' to='/add-card' className="card-link">Add card</Link>
                    <CardRender userId={userId} />
                </div>
                </div>
            </div>
            </div>
            
        </section>
    </div> 
    );
}