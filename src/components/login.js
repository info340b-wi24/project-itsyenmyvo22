import React from 'react';
import { getAuth, EmailAuthProvider, GoogleAuthProvider } from 'firebase/auth'
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';

export default function login(props) {
   const firebaseUIConfig = {
      signInOptions: [
        GoogleAuthProvider.PROVIDER_ID,
        { provider: EmailAuthProvider.PROVIDER_ID, requiredDisplayName: true },
      ],
      signInFlow: 'popup', 
      credentialHelper: 'none', 
      callbacks: { 
        signInSuccessWithAuthResult: () => {
          return false; //don't redirect after authentication
        }
      }
   }

   const auth = getAuth();

    return (
      <div>
        <h1>My App</h1>
        <p>Please sign-in:</p>
        <StyledFirebaseAuth uiConfig={firebaseUIConfig} firebaseAuth={auth} />
      </div>
    )
}





  
