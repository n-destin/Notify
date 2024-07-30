/* eslint-disable import/no-extraneous-dependencies */
// Import the functions you need from the SDKs you need
// https://www.youtube.com/watch?v=vDT7EnUpEoo
import { initializeApp } from 'firebase/app';
import {
    getAuth, GoogleAuthProvider, signInWithPopup,
    createUserWithEmailAndPassword, signInWithEmailAndPassword,
    FacebookAuthProvider, GithubAuthProvider,
} from 'firebase/auth';
import 'firebase/compat/database';

const firebaseConfig = {
 // configure firebase
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

//= ================================ Google Auth =================================
const googleProvider = new GoogleAuthProvider();

export function signInWithGoogle() {
    return signInWithPopup(auth, googleProvider).then((result) => {
        console.log(result);

        return result;
    }).catch((error) => {
        console.log(error);
        throw error;
    });
}

//= ================================ Email/Password Auth=================================

// SIGN UP with email and password
export function emailSignUp(email, password) {
    return createUserWithEmailAndPassword(auth, email, password).then((result) => {
    // Signed In
        console.log(result);
        // const { user } = result.user;
        return result;
    }).catch((error) => {
        console.log(error);
        throw error;
    });
}

// SING IN with email and password
export function emailSignIn(email, password) {
    return signInWithEmailAndPassword(auth, email, password).then((result) => {
    // Signed In
        console.log(result);
        // const { user } = result.user;
        localStorage.setItem('userEmail', result.user.email);
        return result;
    }).catch((error) => {
        console.log(error);
        throw error;
    });
}

//= ================================ faceBook Auth=================================
const facebookProvider = new FacebookAuthProvider();

export function signInWithFacebook() {
    return signInWithPopup(auth, facebookProvider).then((result) => {
        console.log(result);
        // const credential = FacebookAuthProvider.credentialFromResult(result);
        // const { accessToken } = credential.accessToken;
        return result;
    }).catch((error) => {
        console.log(error);
        throw error;
    });
}

//= ================================ GitHub Auth=================================

const githubProvider = new GithubAuthProvider();
export function signInWithGithub() {
    return signInWithPopup(auth, githubProvider).then((result) => {
        console.log(result);
        // const credential = GithubAuthProvider.credentialFromResult(result);
        // const token = credential.accessToken;
        return result;
    }).catch((error) => {
        console.log(error);
        throw error;
    });
}
