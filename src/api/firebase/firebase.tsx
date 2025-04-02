import {Auth, GoogleAuthProvider, UserCredential} from "firebase/auth";
import {createUserWithEmailAndPassword, signInWithEmailAndPassword, signInWithPopup, signOut} from "firebase/auth";

function registerWithEmailAndPassword(
    auth: Auth,
    username: string,
    email: string,
    password: string
): Promise<UserCredential> {
    username;
    return createUserWithEmailAndPassword(auth, email, password);
}

function loginWithEmailAndPassword(
    auth: Auth,
    email: string,
    password: string
): Promise<UserCredential> {
    return signInWithEmailAndPassword(auth, email, password);
}

function loginWithGoogle(auth: Auth): Promise<UserCredential> {
    const provider = new GoogleAuthProvider();
    return signInWithPopup(auth, provider);
}

function logout(auth: Auth): Promise<void> {
    return signOut(auth);
}

export {
    registerWithEmailAndPassword,
    loginWithEmailAndPassword,
    loginWithGoogle,
    logout,
};