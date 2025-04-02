import {FormEvent, FormEventHandler} from "react";
import {Box, Button, TextField} from "@mui/material";

interface LoginFormProps {
    onSubmit: (email: string, password: string) => void;
    onGoogleSignIn: () => void;
}

function LoginForm({onSubmit, onGoogleSignIn}: LoginFormProps) {
    let email: string = '';
    let password: string = '';

    const handleSubmit: FormEventHandler<HTMLFormElement> = (event: FormEvent) => {
        event.preventDefault();
        onSubmit(email, password);
    };

    return (
        <Box component='form' noValidate autoComplete='off' onSubmit={handleSubmit}>
            <div aria-label='login-form'>
                <TextField
                    required
                    label="Email"
                    variant="outlined"
                    type="email"
                    fullWidth
                    onInput={(e) => email = (e.target as HTMLInputElement).value}
                />
                <TextField
                    required
                    label="Password"
                    variant="outlined"
                    type="password"
                    fullWidth
                    onInput={(e) => password = (e.target as HTMLInputElement).value}
                />
            </div>
            <Button type="submit">Login</Button>
            <Button type="button" onClick={onGoogleSignIn}>Sign in with Google</Button>
        </Box>
    );
}

export default LoginForm;