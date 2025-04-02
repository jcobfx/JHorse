import {StrictMode} from 'react'
import {hydrateRoot} from 'react-dom/client'
import {BrowserRouter} from "react-router";
import Router from "./router/Router.tsx";
import {auth} from "./api/firebase";

hydrateRoot(
    document.getElementById('root') as HTMLElement,
    <StrictMode>
        <BrowserRouter>
            <Router auth={auth}/>
        </BrowserRouter>
    </StrictMode>,
    {
        onCaughtError: error => console.error(error),
        onUncaughtError: error => console.error(error),
        onRecoverableError: error => console.error(error),
    }
)