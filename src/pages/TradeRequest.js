import { Link } from 'react-router-dom';
import React, {useState, useEffect} from 'react';
import { getDatabase, ref, set, push, onValue, get, child, orderByChild, query, equalTo } from 'firebase/database';
import { getAuth, onAuthStateChanged } from 'firebase/auth'
import 'firebase/auth';



export default function TradeRequest(props) {
    const db = getDatabase();
    const auth = getAuth();
    const userDataRef = ref(db, 'userData');
    const cardDataRef = ref(db, 'cardData');
    const reqRef = ref(db, "requestData");

    const fetchEmailFromCardData = async (userId) => { 
        // cardDataRef.once('value', (cardDataSnapshot) => {
        //     cardDataSnapshot.forEach((cardSnapshot) => {
        //         const userId = cardSnapshot.child(userId).val();
        //         const newUserDataRef = userDataRef.child(userId);
    
        //         userDataRef.once('value', (userDataSnapshot) => {
        //             const email = userDataSnapshot.child('email').val();
        //             console.log(`Email associated with userId ${userId} is: ${email}`);
        //         });
        //     });
        // });

        try {
            const userDataSnapshot = await get(child(userDataRef, userId));
            const email = userDataSnapshot.val().email;
            return email;
        } catch (error) {
            console.error('Error fetching email:', error);
            throw error;
        }
    };

    // const fetchEmailByUserId = async (userId) => {
    //     try {
    //         const userDataSnapshot = await get(child(userDataRef, userId));
    //         const userData = userDataSnapshot.val();
    //         if (userData && userData.email) {
    //             return userData.email;
    //         } else {
    //             throw new Error('Email not found for user with userId: ' + userId);
    //         }
    //     } catch (error) {
    //         console.error('Error fetching email by user ID:', error);
    //         throw error;
    //     }
    // };
    
    // const fetchCardUserData = async () => {
    //     try {
    //         const cardDataSnapshot = await get(cardDataRef);
    //         const promises = [];
    
    //         cardDataSnapshot.forEach((cardSnapshot) => {
    //             const cardData = cardSnapshot.val();
    //             const userId = cardData.userId;
    //             promises.push(fetchEmailByUserId(userId));
    //         });
    
    //         return Promise.all(promises);
    //     } catch (error) {
    //         console.error('Error fetching card data:', error);
    //         throw error;
    //     }
    // };

    const useAuthentication = () => {
        const [currentUser, setCurrentUser] = useState(null);

        useEffect(() => {
            const unsubscribe = onAuthStateChanged(auth, (user) => {
                if (user) {
                    setCurrentUser(user);
                } else {
                    setCurrentUser(null);
                }
            });

            return () => unsubscribe();
        }, []);

        return currentUser;
    };

    const sendRequest = async (recipientId, currentUser) => {
        // if (!currentUser || !recipientId) {
        //     console.error('Current user or recipient ID is not available!');
        //     return;
        // }
    
        // try {
        //     const email = await fetchEmailByUserId(recipientId);
        //     const newReqRef = push(reqRef);
        //     await set(newReqRef, {
        //         senderId: currentUser.email,
        //         recipientId: email,
        //         status: "pending"
        //     });
        //     console.log('Request sent successfully!');
        // } catch (error) {
        //     console.error('Error sending request:', error);
        // }
        if (!currentUser || !recipientId) {
            console.error('Current user or recipient ID is not available!');
            return;
        }
    
        try {
            const email = await fetchEmailByUserId(recipientId);
            const newReqRef = push(reqRef);
            await set(newReqRef, {
                senderId: currentUser.email,
                recipientId: email,
                status: "pending"
            });
            console.log('Request sent successfully!');
        } catch (error) {
            console.error('Error sending request:', error);
        }
    };

    return (
    <div className="trade-request">
        <p className="request-title">Request Trade</p>
        <p>Are you sure you want to send a request to trade this card?</p>
        <Link aria-label="accept" to='/Accept' className="member-btn" onClick={sendRequest}>Accept</Link>
        <Link aria-label="decline" to='/Cards' className="member-btn">Decline</Link>
    </div>
    );
};