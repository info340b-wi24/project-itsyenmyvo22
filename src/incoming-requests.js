import React from 'react';
import ReactDOM from 'react-dom/client';
import './style.css';
import App from './components/App';

export function incomingRequests (props) {
    return (
    <main id="incoming" class="incoming">
        <h1 class="rqh1">Incoming Requests</h1>
        <div class="rectangle">
            <div id="none-sent" class="none">
            No incoming requests
            </div>
        </div>
    </main>
    );
}