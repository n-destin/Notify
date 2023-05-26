/* eslint-disable react/jsx-indent-props */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable react/jsx-indent */
/* eslint-disable indent */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.scss';

// images
import FBIcon from '../../assets/FBIcon.png';
import GitHub from '../../assets/GitHub.png';
import GoogleIcon from '../../assets/googleIcon.png';
import {
    signInWithGoogle, emailSignUp, emailSignIn, signInWithFacebook, signInWithGithub,
} from '../../services/dataStore';

export default function Login() {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    // Google Sign in
    const handleGoogleSignIn = () => {
        signInWithGoogle().then(() => {
            navigate('/home');
        }).catch((error) => {
            console.log(error);
        });
    };

    // Facebook Sign in
    const handleFacebookSignIn = () => {
        signInWithFacebook().then(() => {
            navigate('/home');
        }).catch((error) => {
            console.log(error);
        });
    };

    // Github Sign in
    const handleGithubSignIn = () => {
        signInWithGithub().then(() => {
            navigate('/home');
        }).catch((error) => {
            console.log(error);
        });
    };

    // Email/Password Sign up
    const handleEmailSignUp = () => {
        emailSignUp(email, password).then(() => {
            navigate('/home');
        }).catch((error) => {
            const errorCode = error.code;
            // eslint-disable-next-line no-alert
            alert(errorCode);
        });
    };

    // Email/Password Sign in
    const handleEmailSignIn = () => {
        emailSignIn(email, password).then(() => {
            navigate('/home');
        }).catch((error) => {
            const errorCode = error.code;
            // eslint-disable-next-line no-alert
            alert(errorCode);
        });
    };

    const [activeForm, setActiveForm] = useState('login');

    return (
        <div className="LoginContainer">
            <img className="logo" src="src/assets/0_0 1@3x.png" alt="lofo" style={{ marginLeft: '250px' }} />

            <div className="LoginInputContainer">
                <div className="card">

                    <h1 className="LoginTitle">Welcome Back</h1>
                    <h3 className="LoginSubtitle">Welcome back, please enter your credentials</h3>

                    <div className="EmailAndPasswordContainer">
                    <div className="switch">
                        <div
                            className={`switch-item-login ${activeForm === 'login' ? 'active' : ''}`}
                            onClick={() => setActiveForm('login')}
                            style={{ marginRight: '20px', marginLeft: '20px', fontSize: '20px' }}
                        >
                            Login
                        </div>
                        <div
                            className={`switch-item-signup ${activeForm === 'signup' ? 'active' : ''}`}
                            onClick={() => setActiveForm('signup')}
                            style={{ marginRight: '20px', marginLeft: '20px', fontSize: '20px' }}
                        >
                            Signup
                        </div>
                    </div>

                    <div className="type">
                        {activeForm === 'login' ? (
                            <div className="Login">
                                <h2>Login</h2>
                                <form action="">
                                <input className="eInput" type="text" placeholder="Email" onChange={(e) => setEmail(e.target.value)} style={{ width: '150%' }} />
                                <input className="pInput" type="text" placeholder="Password" onChange={(e) => setPassword(e.target.value)} style={{ width: '150%' }} />
                                <button className="EmailButton" type="button" onClick={handleEmailSignIn}>Login</button>
                                </form>
                            </div>
                        ) : (
                            <div className="Signup">
                            <h2>Signup</h2>
                            <form action="">
                                <input className="esInput" type="text" placeholder="Email" onChange={(e) => setEmail(e.target.value)} style={{ width: '150%' }} />
                                <input className="psInput" type="text" placeholder="Password" onChange={(e) => setPassword(e.target.value)} style={{ width: '150%' }} />
                                <button className="EmailSButton" type="button" onClick={handleEmailSignUp}>Sign Up</button>
                            </form>
                            </div>
                        )}
                    </div>

                        {/* <div className="signInSignUpContainer">
                            <button className="signInButton" type="button">Sign In</button>
                            <button className="signUpButton" type="button">Sign Up</button>
                        </div> */}
                    </div>
                    <h2>Or use:</h2>
                    <div className="LogoContainer">
                        <img className="GoogleIcon" src={GoogleIcon} alt="Google Icon" onClick={handleGoogleSignIn} />
                        <img className="FaceBookIcon" src={FBIcon} alt="FaceBook Icon" onClick={handleFacebookSignIn} />
                        <img className="AppleIcon" src={GitHub} alt="Apple Icon" onClick={handleGithubSignIn} />
                    </div>
                </div>
            </div>
        </div>
    );
}
