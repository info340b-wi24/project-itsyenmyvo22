import React from 'react';
import { getAuth, EmailAuthProvider, GoogleAuthProvider } from 'firebase/auth'
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';

const firebaseUIConfig = {
  signInOptions: [
    GoogleAuthProvider.PROVIDER_ID,
    { provider: EmailAuthProvider.PROVIDER_ID, requiredDisplayName: true },
  ],
  signInFlow: 'popup', 
  credentialHelper: 'none', 
  callbacks: { 
    signInSuccessWithAuthResult: () => {
      return false; 
    }
  }
}

export default function Login(props) {
   const currentUser = props.currentUser;

   const auth = getAuth();

    return (
      <div className='authen-container'>
        <h1>Login</h1>
        <p className='login-instructions'>To ensure a safe environment for ARMY, login is required to access this application. Please sign-in:</p>
        <StyledFirebaseAuth uiConfig={firebaseUIConfig} firebaseAuth={auth} />
      </div>
    )
}





  
