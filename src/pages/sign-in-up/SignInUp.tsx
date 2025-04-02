import {Auth} from "firebase/auth";
import {effect, Signal, signal} from "@preact/signals-react";
import LoginForm from "./forms/LoginForm.tsx";
import RegisterForm from "./forms/RegisterForm.tsx";
import {Button} from "@mui/material";
import {loginWithEmailAndPassword, loginWithGoogle, registerWithEmailAndPassword} from "../../api/firebase";

interface SignInUpProps {
    auth: Signal<Auth>;
}

function SignInUp({auth}: SignInUpProps) {
    const isSignIn = signal<boolean>(false);

    effect(() => {
        console.log(isSignIn.value)
    })

    return (
        <>
            {
                isSignIn.value
                    ? <LoginForm onSubmit={(email, password) =>
                        loginWithEmailAndPassword(auth.value, email, password)}
                                 onGoogleSignIn={() => loginWithGoogle(auth.value)}
                    />
                    : <RegisterForm onSubmit={(username, email, password) =>
                        registerWithEmailAndPassword(auth.value, username, email, password)}
                                    onGoogleSignIn={() => loginWithGoogle(auth.value)}/>
            }
            <Button onClick={() => isSignIn.value = !isSignIn.value}>
                {isSignIn.value ? 'Switch to Register' : 'Switch to Login'}
            </Button>
        </>
    )
}

export default SignInUp;