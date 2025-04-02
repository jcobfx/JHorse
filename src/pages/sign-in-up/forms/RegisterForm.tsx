import {FormEvent, FormEventHandler} from "react";
import {Box, Button, TextField} from "@mui/material";

interface RegisterFormProps {
    onSubmit: (username: string, email: string, password: string) => void;
    onGoogleSignIn: () => void;
}

function RegisterForm({onSubmit, onGoogleSignIn}: RegisterFormProps) {
    let username: string = '';
    let email: string = '';
    let password: string = '';

    const handleSubmit: FormEventHandler<HTMLFormElement> = (event: FormEvent) => {
        event.preventDefault();
        onSubmit(username, email, password);
    };

    return (
        <Box component='form' noValidate autoComplete='off' onSubmit={handleSubmit}>
            <div aria-label='register-form'>
                <TextField
                    required
                    label="Username"
                    variant="outlined"
                    type="text"
                    fullWidth
                    onInput={(e) => username = (e.target as HTMLInputElement).value}
                />
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

export default RegisterForm;