import React, {useState, useEffect} from 'react';
import { getDatabase, ref, child, set, onValue, off} from 'firebase/database';
import { getAuth, onAuthStateChanged } from 'firebase/auth'
import { unsub as Unsubscribe } from 'firebase/auth';
import 'firebase/auth';
import TradeRequest from './TradeRequest';

export default function SentRequests (props) {
    // const [status, setStatus] = useState('');
    // const [user, setUser] = useState([]);
    // const [currentUser, setCurrentUser] = useState(null);
    // const database = getDatabase();
    // const userDataRef = ref(database, 'userData');

    // useEffect(() => {
    //     const auth = getAuth();

    //     onAuthStateChanged(auth, (user) => {
    //     if (user) {
    //         setCurrentUser(user);
    //     } else {
    //       setCurrentUser(null);
    //     }
    //     });
    // }, []);

    // useEffect(() => {
    //     const unregisterFunction = onValue(userDataRef, (snapshot) => {
    //         const userDataRef = snapshot.val();
    //         setUser(userDataRef);
    //     })

    //     function cleanup() {
    //         unregisterFunction();
    //     }
    //     return cleanup;
    // }, []);

 


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
};