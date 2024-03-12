import React, {useState, useEffect} from 'react';
import { getDatabase, ref, child, set, onValue, off} from 'firebase/database';
import { getAuth, onAuthStateChanged } from 'firebase/auth'
import { unsub as Unsubscribe } from 'firebase/auth';
import 'firebase/auth';
import TradeRequest from './TradeRequest';
import { update } from 'firebase/database';

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
    const [accept, setAccept] = useState(false);
    const [reject, setReject] = useState(false);
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

//   const handleAccept = () => {
//     console.log("accept");
//    // const pendingRequest = Object.values(requestData).find(request => request.status === 'pending' && request.recipientId === userEmail );

// console.log(requestData);
// const unregisterFunction = onValue(requestData, (snapshot) => {
//   const leader = snapshot.val();
//   const objKeys =  Object.keys(leader)
//   const objArray = objKeys.map((keyString) => {
   
//       leader[keyString].key = keyString;
//       return leader[keyString];
     
//   });

// const pendingRequest = objArray.filter((request) =>{
//   return request.status === "pending" && request.recipientId === userEmail;
// });
// console.log(objArray)
    
// });
//   }
const handleAccept = (requestId) => {
  console.log("accept");
  const requestRef = ref(db, `requestData/${requestId}`);
  update(requestRef, { status: 'accepted' })
    .then(() => {
      console.log('Request accepted successfully');
    })
    .catch((error) => {
      console.error('Error accepting request:', error);
    });

    const requestDataRef = ref(db, 'requestData');

      const unregisterFunction = onValue(requestDataRef, (snapshot) => {
          const leader = snapshot.val();
          const objKeys = Object.keys(leader);
          const objArray = objKeys.map((keyString) => {
              leader[keyString].key = keyString;
              return leader[keyString];
          });
    console.log(objArray);
          const pendingRequest = objArray.filter((request) => {
           // console.log(userEmail
           return request.status === "pending" && request.recipientId === userEmail ;
            //return request.id === requestId;
      
        
          });
          console.log(pendingRequest)
          setRequestData(pendingRequest);
        })
       
};
// const handleAccept = (requestId)=> {
//   console.log("accept");
// console.log(requestId);
//   // Assuming 'requestData' is the reference to your database
 
//   const requestDataRef = ref(db, 'requestData');

//   const unregisterFunction = onValue(requestDataRef, (snapshot) => {
//       const leader = snapshot.val();
//       const objKeys = Object.keys(leader);
//       const objArray = objKeys.map((keyString) => {
//           leader[keyString].key = keyString;
//           return leader[keyString];
//       });
// console.log(objArray);
//       const pendingRequest = objArray.filter((request) => {
//        // console.log(userEmail
//        return request.status === "pending" && request.recipientId === userEmail && request.key !== requestId ;
//         //return request.id === requestId;
//       });
      
//       console.log(pendingRequest);
//       setRequestData(pendingRequest);
//       // Implement your logic here based on 'pendingRequest'
//       // For example, if you want to update the status of the pending request
//       // if (pendingRequest.length > 0) {
//       //         const requestId = Object.keys(requestData).find(key => requestData[key] === pendingRequest);
//       //         const requestRef = ref(db, `requestData/${requestId}`);
//       //         console.log(requestId);
//       //         update(requestRef, { status: 'accepted' })
//       //           .then(() => {
//       //             console.log('Request accepted successfully');
//       //             setRequestData(prevData => {
//       //               const updatedData = { ...prevData };
//       //               delete updatedData[requestId];
//       //               return updatedData;
//       //             });
//       //           })
//       //           .catch((error) => {
//       //             console.error('Error accepting request:', error);
//       //           });
//       //       }
          
//   });

       
//   return unregisterFunction
// };

  const handleReject = () => {
    const pendingRequest = Object.values(requestData).find(request => request.status === 'pending' && request.recipientId === userEmail);
    if (pendingRequest) {
        const requestId = Object.keys(requestData).find(key => requestData[key] === pendingRequest);
        const requestRef = ref(db, `requestData/${requestId}`);
        update(requestRef, { status: 'rejected' })
        .then(() => {
            console.log('Request rejected successfully');
            setRequestData(prevData => {
            const updatedData = { ...prevData };
            delete updatedData[requestId];
            return updatedData;
            });
        })
        .catch((error) => {
            console.error('Error rejecting request:', error);
        });
    }
  };

  return (
    <div>
    <main className='incoming'>
    <h1 className="rqh1">Incoming Requests</h1>
      <div className="rectangle">
      {hasEmail && requestData && (
            <div id="none-sent" className="none">
              {Object.keys(requestData).map(key => {
                const request = requestData[key];
                if (request.recipientId === userEmail ) {
                  return (
                    <div key={key}>
                        You received a request from {request.senderId}
                        <button onClick={() => handleAccept(request.key)}>Accept</button>
                        <button onClick={handleReject}>Reject</button>
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
}