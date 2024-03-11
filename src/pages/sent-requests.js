import React, {useState, useEffect} from 'react';
import { getDatabase, ref, child, set, onValue, off} from 'firebase/database';
import { getAuth, onAuthStateChanged } from 'firebase/auth'
import { unsub as Unsubscribe } from 'firebase/auth';
import 'firebase/auth';
import TradeRequest from './TradeRequest';

export default function SentRequests (props) {
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
            .map(request => request.senderId);
  
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

  return (
    <div>
      <main className="sent">
        <h1 className="rqh1">Sent Requests</h1>
        <div className="rectangle">
          {hasEmail && requestData && (
            <div id="none-sent" className="none">
              {Object.keys(requestData).map(key => {
                const request = requestData[key];
                if (request.senderId === userEmail) {
                  return (
                    <div key={key}>
                      Your request to {request.recipientId} is {request.status}.
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
        </div>
      </main>
    </div>
  );
};
//   const [userEmail, setUserEmail] = useState(null);
//   const [hasEmail, setHasEmail] = useState(false);
//   const auth = getAuth();
//   const db = getDatabase();

//   useEffect(() => {
//     onAuthStateChanged(auth, (user) => {
//         if (user) {
//             setUserEmail(user.email);
//         } else {
//             setUserEmail(null);
//         }
//     });

//   }, [auth]);

//   useEffect(() => {
//     if (userEmail) {
//       const emailsRef = ref(db, 'requestData');
  
//       const unsubscribe = onValue(emailsRef, (snapshot) => {
//         const requestData = snapshot.val();
  
//         if (requestData && typeof requestData === 'object') {
//           // Extract email addresses from the requestData
//           const emailsArray = Object.values(requestData)
//             .map(request => request.senderId);
  
//           // Check if userEmail exists in the emailsArray
//           const hasEmail = emailsArray.includes(userEmail);
//           setHasEmail(hasEmail);
//         } else {
//           console.log("No valid requestData available");
//         }
//       }, (error) => {
//         console.error("Error retrieving data:", error);
//       });
  
//       return () => unsubscribe();
//     }
//   }, [userEmail, db]);

//     return (
//         <div>
//             {hasEmail ? (
//                 <main className="sent">
//                 <h1 className="rqh1">Sent Requests</h1>
//                 <div className="rectangle">
//                     <div id="none-sent" className="none">
//                     Your request to ${requestData.recipientId} is pending.
//                     </div>
//                 </div>
//                 </main>
//             ) : (
//               <main className="sent">
//               <h1 className="rqh1">Sent Requests</h1>
//               <div className="rectangle">
//                   <div id="none-sent" className="none">
//                   No sent requests
//                   </div>
//               </div>
//               </main>
//             )}
//         </div>
        
//     );
// };