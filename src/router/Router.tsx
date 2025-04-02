import {Navigate, Route, Routes} from "react-router";
import {NotFound, SignInUp, Home} from "../pages";
import BaseLayout from "../components/layout/BaseLayout.tsx";
import {Auth} from "firebase/auth";
import {Signal} from "@preact/signals-react";
import {useAuthState} from "react-firebase-hooks/auth";

interface RouterProps {
    auth: Signal<Auth>;
}

function Router({auth}: RouterProps) {
    const [user, loading] = useAuthState(auth.value);

    if (loading) {
        return <div>Loading...</div>
    }

    return (
        <Routes>
            <Route element={<BaseLayout/>}>
                <Route index element={<Home/>}/>
                <Route path='sign-in-up' element={user ? <Navigate to='/'/> : <SignInUp auth={auth}/>}/>
                <Route path='*' element={<NotFound/>}/>
            </Route>
        </Routes>
    )
}

export default Router;