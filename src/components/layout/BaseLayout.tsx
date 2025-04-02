import {Box} from "@mui/material";
import {Outlet} from "react-router";

function BaseLayout() {
    return (
        <Box>
            <Box component='header'>
                <h1>Header</h1>
            </Box>
            <Box component='main'>
                <Outlet/>
            </Box>
            <Box component='footer'>
                <div>Footer</div>
            </Box>
        </Box>
    );
}

export default BaseLayout;