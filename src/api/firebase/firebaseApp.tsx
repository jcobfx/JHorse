import {computed, signal} from "@preact/signals-react";
import {initializeApp} from "firebase/app";
import firebaseConfig from "./config.tsx";
import {Auth, getAuth} from "firebase/auth";

const localAuth = signal<Auth>();
const auth = computed<Auth>(
    () => {
        if (!localAuth.value) initApp();
        return localAuth.value as Auth;
    }
);

function initApp() {
    localAuth.value = getAuth(initializeApp(firebaseConfig));
}

export {auth};