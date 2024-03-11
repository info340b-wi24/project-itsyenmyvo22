import React, {useState, useEffect} from 'react';
import { getDatabase, ref, child, set, onValue, off} from 'firebase/database';
import { getAuth, onAuthStateChanged } from 'firebase/auth'
import { unsub as Unsubscribe } from 'firebase/auth';
import 'firebase/auth';
import TradeRequest from './TradeRequest';

export default function IncomingRequests (props) {
//     const [userEmail, setUserEmail] = useState(null);
//     const [hasEmail, setHasEmail] = useState(false);
//     const [requestData, setRequestData] = useState(null);
//     const auth = getAuth();
//     const db = getDatabase();
  
//     useEffect(() => {
//       onAuthStateChanged(auth, (user) => {
//         if (user) {
//           setUserEmail(user.email);
//         } else {
//           setUserEmail(null);
//         }
//       });
//     }, [auth]);
  
//     useEffect(() => {
//       if (userEmail) {
//         const emailsRef = ref(db, 'requestData');
    
//         const unsubscribe = onValue(emailsRef, (snapshot) => {
//           const requestData = snapshot.val();
    
//           if (requestData && typeof requestData === 'object') {
//             setRequestData(requestData);
    
//             // Extract email addresses from the requestData
//             const emailsArray = Object.values(requestData)
//               .map(request => request.recipientId);
    
//             // Check if userEmail exists in the emailsArray
//             const hasEmail = emailsArray.includes(userEmail);
//             setHasEmail(hasEmail);
//           } else {
//             console.log("No valid requestData available");
//           }
//         }, (error) => {
//           console.error("Error retrieving data:", error);
//         });
    
//         return () => unsubscribe();
//       }
//     }, [userEmail, db]);
    
//     const handleAccept = (requestId) => {
//         // Implement logic to handle request acceptance
//       };
    
//       const handleReject = (requestId) => {
//         // Implement logic to handle request rejection
//       };

//     return (
//         <main className="incoming">
//         <h1 className="rqh1">Incoming Requests</h1>
//         <div className="rectangle">
//         {hasEmail && requestData && (
//             <div id="none-sent" className="none">
//               {Object.keys(requestData).map(key => {
//                 const request = requestData[key];
//                 if (request.recipientId === userEmail) {
//                   return (
//                     <div key={key}>
//                         <p>You received a request from {request.senderId}</p>
//                         <button onClick={() => handleAccept(request.id)}>Accept</button>
//                         <button onClick={() => handleReject(request.id)}>Reject</button>
//                     </div>
//                   );
//                 }
//                 return null;
//               })}
//             </div>
//           )}
//           {!hasEmail && (
//             <div id="none-sent" className="none">
//               No incoming requests
//             </div>
//           )}
//             {/* <div id="none-sent" className="none">
//             No incoming requests
//             </div> */}
//         </div>
//         </main>
//     //</div>
//     );
// }

    const [userEmail, setUserEmail] = useState(null);
    const [hasEmail, setHasEmail] = useState(false);
    const [requestData, setRequestData] = useState(null);
    const auth = getAuth();
    const db = getDatabase();

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUserEmail(user.email);
      } else {
        setUserEmail(null);
      }
    });
  }, [auth]);

  useEffect(() => {
    if (userEmail) {
      const emailsRef = ref(db, 'requestData');
  
      const unsubscribe = onValue(emailsRef, (snapshot) => {
        const requestData = snapshot.val();
  
        if (requestData && typeof requestData === 'object') {
          setRequestData(requestData);
  
          // Extract email addresses from the requestData
          const emailsArray = Object.values(requestData)
            .map(request => request.recipientId);
  
          // Check if userEmail exists in the emailsArray
          const hasEmail = emailsArray.includes(userEmail);
          setHasEmail(hasEmail);
        } else {
          console.log("No valid requestData available");
        }
      }, (error) => {
        console.error("Error retrieving data:", error);
      });
  
      return () => unsubscribe();
    }
  }, [userEmail, db]);

  const handleAccept = (requestId) => {
    // Implement logic to handle request acceptance
  };

  const handleReject = (requestId) => {
    // Implement logic to handle request rejection
  };

  return (
    <div>
      <h1 className="rqh1">Incoming Requests</h1>
      <div className="rectangle">
      {hasEmail && requestData && (
            <div id="none-sent" className="none">
              {Object.keys(requestData).map(key => {
                const request = requestData[key];
                if (request.recipientId === userEmail) {
                  return (
                    <div key={key}>
                        You received a request from {request.senderId}
                        <button onClick={() => handleAccept(request.id)}>Accept</button>
                        <button onClick={() => handleReject(request.id)}>Reject</button>
                    </div>
                  );
                }
                return null;
              })}
            </div>
          )}
          {!hasEmail && (
            <div id="none-sent" className="none">
              No sent requests
            </div>
          )}
        {/* {incomingRequests.length > 0 ? (
          incomingRequests.map(request => (
            <div key={request.id} className="incoming-request">
              <img src="request-image.png" alt="Incoming Request" />
              <p>You received a request from {request.senderId}</p>
              <button onClick={() => handleAccept(request.id)}>Accept</button>
              <button onClick={() => handleReject(request.id)}>Reject</button>
            </div>
          ))
        ) : (
          <div id="none-received" className="none">
            No incoming requests
          </div>
        )} */}
      </div>
    </div>
  );
}