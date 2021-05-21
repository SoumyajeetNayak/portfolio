import React from "react";
import {AppBar, Toolbar} from "@material-ui/core";
import {ElevationScroll} from '../../utils/uiUtils'

const Header = () => {
    return (
        <ElevationScroll>
            <AppBar>
                <Toolbar>
                    CodeWithSoumyajeet
                </Toolbar>
            </AppBar>
        </ElevationScroll>

    )
}

export default Header