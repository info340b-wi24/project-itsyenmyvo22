import { Link } from 'react-router-dom';
import React, {useState, useEffect} from 'react';
import { getDatabase, ref, onValue} from 'firebase/database';
import { getAuth } from 'firebase/auth'
import 'firebase/auth';


export default function TradeRequest(props) {
    const [status, setStatus] = useState('');
    const [userCurrent, setUserCurrent] = useState(null);
    const auth = getAuth();
    const currentUser = auth.currentUser();
    const database = getDatabase();
    const userDataRef = ref(database, 'userData');

    if (currentUser !== null) {
        setUserCurrent(currentUser.email);
    }


    const sendRequest = () => {
        const db = getDatabase();
        const reqRef = ref(db, 'reqData');
        const newReqRef = reqRef.push();

        newReqRef.set({
            senderId: currentUser,
            //recipientId,
            status: status
        })
        .then(() => {
            console.log()
            console.log("Request sent successfully!");
        })
        .catch(error => {
            console.error("Error sending request:", error);
        });
    };


    return (
    <div className="trade-request">
        <p className="request-title">Request Trade</p>
        <p>Are you sure you want to send a request to trade this card?</p>
        <Link aria-label="accept" to='/Accept' className="member-btn" onClick={sendRequest}>Accept</Link>
        <Link aria-label="decline" to='/Cards' className="member-btn">Decline</Link>
    </div>
    )
};