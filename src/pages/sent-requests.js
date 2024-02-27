import React from 'react';
import ReactDOM from 'react-dom/client';
import './style.css';
import App from '../components/App';

export function sentRequests (props) {
    return (
    <main id="sent" class="sent">
        <h1 class="rqh1">Sent Requests</h1>
        <div class="rectangle">
            <div id="none-sent" class="none">
            No sent requests
            </div>
        </div>
    </main>
    );
}