/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  signInWithGoogle, emailSignUp, emailSignIn, signInWithFacebook, signInWithGithub,
} from '../services/dataStore';

// images
import GoogleIcon from '../images/googleIcon.png';
import FBIcon from '../images/fbIcon.png';
import GitHub from '../images/GitHub.png';

export default function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // Google Sign in
  const handleGoogleSignIn = () => {
    signInWithGoogle().then(() => {
      navigate('/test');
    }).catch((error) => {
      console.log(error);
    });
  };

  // Facebook Sign in
  const handleFacebookSignIn = () => {
    signInWithFacebook().then(() => {
      navigate('/test');
    }).catch((error) => {
      console.log(error);
    });
  };

  // Github Sign in
  const handleGithubSignIn = () => {
    signInWithGithub().then(() => {
      navigate('/test');
    }).catch((error) => {
      console.log(error);
    });
  };

  // Email/Password Sign up
  const handleEmailSignUp = () => {
    emailSignUp(email, password).then(() => {
      navigate('/test');
    }).catch((error) => {
      const errorCode = error.code;
      // eslint-disable-next-line no-alert
      alert(errorCode);
    });
  };

  // Email/Password Sign in
  const handleEmailSignIn = () => {
    emailSignIn(email, password).then(() => {
      navigate('/test');
    }).catch((error) => {
      const errorCode = error.code;
      // eslint-disable-next-line no-alert
      alert(errorCode);
    });
  };

  return (
    <div className="LoginContainer">
      <h1 className="test">Test</h1>
      <div className="LoginInputContainer">

        <h1 className="LoginTitle">Welcome Back</h1>
        <h3 className="LoginSubtitle">Welcome back, please enter your credentials</h3>

        <div className="EmailAndPasswordContainer">
          <div className="signInSignUpContainer">
            <button className="signInButton" type="button">Sign In</button>
            <button className="signUpButton" type="button">Sign Up</button>
          </div>
          <input className="EmailInput" type="text" placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
          <input className="PasswordInput" type="text" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
        </div>
        <div className="EmailLoginButtonContainer">
          <button className="EmailLoginButton" type="button" onClick={handleEmailSignUp}>Sign Up</button>
          <button className="EmailLoginButton" type="button" onClick={handleEmailSignIn}>Sign In</button>

        </div>
        <div className="LogoContainer">
          <img className="GoogleIcon" src={GoogleIcon} alt="Google Icon" onClick={handleGoogleSignIn} />
          <img className="FaceBookIcon" src={FBIcon} alt="FaceBook Icon" onClick={handleFacebookSignIn} />
          <img className="AppleIcon" src={GitHub} alt="Apple Icon" onClick={handleGithubSignIn} />
        </div>
      </div>
    </div>
  );
}
