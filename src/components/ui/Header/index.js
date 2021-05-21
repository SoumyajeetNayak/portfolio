/*************** React Core Imports ***************/
import React, {useState, useEffect} from "react";
/********************************************************* */

/*************** External Library  Imports ***************/
import {AppBar,Toolbar, Typography, Button} from "@material-ui/core";
import {useMediaQuery} from "@material-ui/core";
import {useTheme} from "@material-ui/core/styles";
import {Link} from 'react-router-dom'
/********************************************************* */

/*************** Local Imports ***************/
import {ElevationScroll, mainTabList} from '../../../utils/uiUtils';
import useStyles from './styles';
import {getTabs, defaultLink, getDrawer} from "./helpers";
/********************************************************* */


const Index = () => {
    const classes = useStyles();
    const theme = useTheme();

    const matches = useMediaQuery(theme.breakpoints.down("md"));
    const [selectedTab, setSelectedTab] = useState(0);
    const [openDrawer, setOpenDrawer] = useState(false);

    useEffect(() => {
        const urlPath = window.location.pathname;
        const selectedTabObject = mainTabList.find(tab => tab.path.toLowerCase() === urlPath.toLowerCase());
        setSelectedTab(selectedTabObject.id || 0)
    }, [selectedTab])


    return (
        <>
            <ElevationScroll>
                <AppBar>
                    <Toolbar disableGutters>
                        <Typography variant={"h4"} className={classes.logo}>
                            <Button disableRipple component={Link} to={defaultLink.path} className={classes.logo} onClick={() => setSelectedTab(defaultLink.id)}>
                                CodeWithSoumyajeet
                            </Button>
                        </Typography>
                            {
                                matches ? getDrawer(mainTabList, openDrawer, setOpenDrawer, classes, selectedTab, setSelectedTab) : getTabs(mainTabList, selectedTab, setSelectedTab, classes)
                            }

                    </Toolbar>
                </AppBar>
            </ElevationScroll>
            <div className={classes.toolbarMargin}/>
        </>
    )
}

export default Index