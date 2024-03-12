import { Link } from 'react-router-dom';
import React, {useState, useEffect} from 'react';
import { getDatabase, ref, set, push, get, child} from 'firebase/database';
import { getAuth, onAuthStateChanged } from 'firebase/auth'
import 'firebase/auth';
import { useParams } from 'react-router-dom';

export default function TradeRequest(props) {
    const db = getDatabase();
    const auth = getAuth();
    //const userDataRef = ref(db, 'userData');
    const cardDataRef = ref(db, 'cardData');
    const reqRef = ref(db, "requestData");
    const [currentUser, setCurrentUser] = useState(null);
    
    const { cardKey } = useParams();

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                setCurrentUser(user);
            } else {
                setCurrentUser(null);
            }
        });

        return () => unsubscribe();
    }, [auth]);

    const HandleTradeRequest = async (card) => {

        try {
           
            const cardDataSnapshot = await get(child(cardDataRef, cardKey)); 
            console.log("Card Data Snapshot:", cardDataSnapshot);
    
            if (cardDataSnapshot.exists()) {
                
                const cardData = cardDataSnapshot.val();
                console.log("Card Data:", cardData);
                const uploaderUserId = cardData.userId;
                console.log("Uploader User ID:", uploaderUserId);
    
                
                const uploaderUserDataRef = ref(db, 'userData/' + uploaderUserId);
                const uploaderUserSnapshot = await get(uploaderUserDataRef);
    
                if (uploaderUserSnapshot.exists()) {
                    const uploaderUserData = uploaderUserSnapshot.val();
                    const uploaderEmail = uploaderUserData.email;
                    console.log("Uploader's Email:", uploaderEmail);
                    console.log("sender's email:", currentUser.email);
    
                    
                    await SendRequest(uploaderEmail);
                } else {
                    console.error('User data not found for uploader userId:', uploaderUserId);
                }
            } else {
                console.error('Card data not found.');
            }
        } catch (error) {
            console.error('Error handling trade request:', error);
        }
    };

    const SendRequest = async (recipientEmail) => {

        if (!currentUser || !recipientEmail) {
            console.error('Current user or recipient ID is not available!');
            return;
        }
    
        try {
            const newReqRef = push(reqRef);
            await set(newReqRef, {
                senderId: currentUser.email,
                recipientId: recipientEmail,
                status: "pending"
            });
            console.log('Trade request sent successfully!');
        } catch (error) {
            console.error('Error sending trade request:', error);
        }
    };

    return (
    <div className="trade-request">
        <p className="request-title">Request Trade</p>
        <p>Are you sure you want to send a request to trade this card?</p>
        <Link aria-label="accept" to='/Accept' className="member-btn" onClick={() => HandleTradeRequest(cardKey)}>Accept</Link>
        <Link aria-label="decline" to='/Cards' className="member-btn">Decline</Link>
    </div>
    );
};