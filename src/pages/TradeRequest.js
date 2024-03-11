import { Link } from 'react-router-dom';
import React, {useState, useEffect} from 'react';
import { getDatabase, ref, set, push, onValue, get, child, orderByChild, query, equalTo } from 'firebase/database';
import { getAuth, onAuthStateChanged } from 'firebase/auth'
import 'firebase/auth';



export default function TradeRequest(props) {
    const db = getDatabase();
    const [status, setStatus] = useState('');
    const [currentUser, setCurrentUser] = useState(null);
    const auth = getAuth();
    const userDataRef = ref(db, 'userData');
    const cardDataRef = ref(db, 'cardData');
    const reqRef = ref(db, "requestData");


    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setCurrentUser(user);
                console.log(currentUser);
            } else {
                setCurrentUser(null);
            }
        });
    }, [auth]);

    const getEmailFromUserData = async (userIdFromCardData) => {
        try {
            const cardDataSnapshot = await get(ref(cardDataRef, userIdFromCardData));
            const cardData = cardDataSnapshot.val();
    
            if (cardData && cardData[userIdFromCardData]) {
                const userId = cardData[userIdFromCardData].userId;
                const userDataSnapshot = await get(ref(userDataRef, userId + '/email'));
                const email = userDataSnapshot.val();
    
                return email;
            } else {
                console.error('No data found in cardData for userId:', userIdFromCardData);
                return null;
            }
        } catch (error) {
            console.error('Error retrieving data:', error);
            return null;
        }
    };

//     const getUserDataFromCardData = async (recipientId) => {
//         try {
//             // Assuming recipientId is the userId
//             const cardDataSnapshot = await get(child(cardDataRef, recipientId));
//             if (cardDataSnapshot.exists()) {
//                 const userId = recipientId;
//                 // Assuming userId is the same in both cardData and userData nodes
//                 const userDataSnapshot = await get(child(userDataRef, userId));
//                 if (userDataSnapshot.exists()) {
//                     const userData = userDataSnapshot.val();
//                     return userData.email; // or return userData to get the entire user data
//                 } else {
//                     console.error('User data not found for recipientId:', recipientId);
//                     return null;
//                 }
//             } else {
//                 console.error('Card data not found for recipientId:', recipientId);
//                 return null;
//             }
//         } catch (error) {
//             console.error('Error retrieving user data from cardData:', error);
//             throw error;
//         }
//     };
    
        
//     // const getRecInfo = async (recipientId) => {
//     //     try {
//     //         // const userDataRef = ref(db, 'userData/' + recipientId);
//     //         // const snapshot = await get(userDataRef);
//     //         const dbRef = getDatabase();
//     //         get(child(dbRef, `users/${recipientId}`)).then((snapshot) => {
//     //             if (snapshot.exists()) {
//     //               console.log(snapshot.val());
//     //             } else {
//     //               console.log("No data available");
//     //             }
//     //           }).catch((error) => {
//     //             console.error(error);
//     //           });
            
//     //         // if (snapshot.exists()) {
//     //         //     const userData = snapshot.val();
//     //         //     setRecipient(userData)
//     //         // } else {
//     //         //     console.log('User data does not exist');
//     //         //     return null;
//     //         // }
//     //     } catch (error) {
//     //         console.error('Error fetching user data:', error);
//     //         return null;
//     //     }
//     // };

const sendRequest = async (recipientId) => {
    if (!currentUser || !recipientId) {
        console.error('Current user or recipient ID is not available!');
        return;
    }

    try {
        const email = await getEmailFromUserData(recipientId);
        const newReqRef = push(reqRef);

        set(newReqRef, {
            senderId: currentUser.email,
            recipientId: email,
            status: "pending"
        })
        .then(() => {
            console.log('Request sent successfully!');
            //setIsRequestSent(true);
            setStatus('pending');
        })
        .catch(error => {
            console.error('Error sending request:', error);
        });
    } catch (error) {
        console.error('Error sending request:', error);
    }
};
    

    // useEffect(() => {
    //     if (currentUser) {
    //         const db = getDatabase();
    //         const reqRef = ref(db, 'requestData');
    //         //const queryRef = query(reqRef, orderByChild('senderId'), equalTo(currentUser));

    //         get(queryRef).then((snapshot) => {
    //             if (snapshot.exists()) {
    //                 setIsRequestSent(true);
    //             } else {
    //                 setIsRequestSent(false);
    //             }
    //         }).catch((error) => {
    //             console.error("Error checking request:", error);
    //         });
    //     }
    // }, [currentUser]);

    return (
    <div className="trade-request">
        <p className="request-title">Request Trade</p>
        <p>Are you sure you want to send a request to trade this card?</p>
        <Link aria-label="accept" to='/Accept' className="member-btn" onClick={sendRequest}>Accept</Link>
        <Link aria-label="decline" to='/Cards' className="member-btn">Decline</Link>
    </div>
    );
};