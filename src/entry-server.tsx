import {StrictMode} from 'react'
import {renderToString} from 'react-dom/server'
import {StaticRouter} from "react-router";
import Router from "./router/Router.tsx";
import {auth} from "./api/firebase";

export async function render(_url: string) {
    const html = renderToString(
        <StrictMode>
            <StaticRouter location={_url}>
                <Router auth={auth}/>
            </StaticRouter>
        </StrictMode>,
    )
    return {html}
}