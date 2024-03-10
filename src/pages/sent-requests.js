import React, {useState, useEffect} from 'react';
import { getDatabase, ref, child, set, onValue, off} from 'firebase/database';
import { getAuth, onAuthStateChanged } from 'firebase/auth'
import { unsub as Unsubscribe } from 'firebase/auth';
import 'firebase/auth';
import TradeRequest from './TradeRequest';

export default function SentRequests (props) {
    const [status, setStatus] = useState('');
    const [user, setUser] = useState([]);
    const [currentUser, setCurrentUser] = useState(null);
    const database = getDatabase();
    const userDataRef = ref(database, 'userData');

    useEffect(() => {
        const auth = getAuth();

        onAuthStateChanged(auth, (user) => {
        if (user) {
            setCurrentUser(user);
        } else {
          setCurrentUser(null);
        }
        });
    }, []);

    useEffect(() => {
        const unregisterFunction = onValue(userDataRef, (snapshot) => {
            const userDataRef = snapshot.val();
            setUser(userDataRef);
        })

        function cleanup() {
            unregisterFunction();
        }
        return cleanup;
    }, []);

    const HandleRequest = () => {
        const sendRequest = () => {
          const senderId = currentUser; 
          const recipientId = user; 
      
          const db = getDatabase();
          const reqRef = ref(db, 'reqData');
          const newReqRef = reqRef.push();
          newReqRef.set({
            senderId,
            recipientId,
            status: status
          })
          .then(() => {
            console.log("Request sent successfully!");
          })
          .catch(error => {
            console.error("Error sending request:", error);
          });
        };


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
}};