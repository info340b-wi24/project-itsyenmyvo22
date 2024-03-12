import React, { useState, useEffect } from 'react';
import { getDatabase, ref, onValue, update } from 'firebase/database';
import { getAuth, onAuthStateChanged } from 'firebase/auth';

export default function IncomingRequests() {
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
      const requestDataRef = ref(db, 'requestData');
      const unsubscribe = onValue(requestDataRef, (snapshot) => {
        const data = snapshot.val();
        setRequestData(data);
        if (data) {
          const hasEmail = Object.values(data).some(
            (request) => request.recipientId === userEmail
          );
          setHasEmail(hasEmail);
        }
      });
      return () => unsubscribe();
    }
  }, [userEmail, db]);

  const handleAccept = (requestId) => {
    const requestRef = ref(db, `requestData/${requestId}`);
    update(requestRef, { status: 'accepted' })
      .then(() => {
        console.log('Request accepted successfully');
      })
      .catch((error) => {
        console.error('Error accepting request:', error);
      });
  };

  const handleReject = (requestId) => {
    const requestRef = ref(db, `requestData/${requestId}`);
    update(requestRef, { status: 'rejected' })
      .then(() => {
        console.log('Request rejected successfully');
      })
      .catch((error) => {
        console.error('Error rejecting request:', error);
      });
  };

  return (
    <div>
      <main className="incoming">
        <h1 className="rqh1">Incoming Requests</h1>
        <div className="rectangle">
          {hasEmail && requestData && (
            <div id="none-sent" className="none">
              {Object.keys(requestData).map((key) => {
                const request = requestData[key];
                
                
                if (request.recipientId === userEmail && request.status === 'pending') {
                  return (
                    
                    <div key={key}>
                      
                      
                        <div>
                          You received a request from {request.senderId}
                          <div className='btn-rq-container'>
                          <button className='btn-rq' onClick={() => handleAccept(key)}>Accept</button>
                          <button className='btn-rq' onClick={() => handleReject(key)}>Reject</button>
                          </div>
                          
                        </div>
                     
                    </div>
                  );
                }else{
                return null;}
            
              
              })}
                {Object.values(requestData).every((request) => request.status !== 'pending') && (
               <div>No pending requests</div>
              )}
            </div>
          )}
          {!hasEmail && (
            <div>No pending requests</div>
          )}
        
        </div>
      </main>
    </div>
  );
}

