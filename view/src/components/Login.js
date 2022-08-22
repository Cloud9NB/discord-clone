import React from 'react';
import '../css/Login.css';
import { Button } from '@mui/material';
import { auth, provider } from '../firebase/firebase';

const Login = () => {
  const signIn = () => {
    auth.signInWithPopup(provider).catch(({ message }) => console.log(message));
  };

  return (
    <div className='login'>
      <div className='login__logo'>
        <img
          src='https://assets-global.website-files.com/6257adef93867e50d84d30e2/62594fddd654fc29fcc07359_cb48d2a8d4991281d7a6a95d2f58195e.svg'
          alt='Discord Logo'
        />
      </div>

      <Button onClick={signIn}>Sign In</Button>
    </div>
  );
};

export default Login;
