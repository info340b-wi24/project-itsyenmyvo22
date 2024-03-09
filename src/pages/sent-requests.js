import React from 'react';
import TradeRequest from './TradeRequest';

export default function SentRequests (props) {
    return (
        <main className="sent">
        <h1 className="rqh1">Sent Requests</h1>
        <div className="rectangle">
            <div id="none-sent" className="none">
            No sent requests
            </div>
        </div>
        </main>
    );
}