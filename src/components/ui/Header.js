import React, {useState} from "react";

import {AppBar, Tabs, Tab, Toolbar, Typography} from "@material-ui/core";
import {makeStyles} from "@material-ui/styles";
import {Link} from 'react-router-dom'

import {ElevationScroll, mainTabList} from '../../utils/uiUtils';

const useStyles = makeStyles(theme => ({
    toolbarMargin: {
        ...theme.mixins.toolbar
    },
    logo: {
        ...theme.typography.mainTextColor,
        marginLeft: "5rem",
        fontWeight:"bolder",
    },
    tabContainer:{
        marginLeft: "auto",
        marginRight: "200px"
    },
    tabItem:{
        ...theme.typography.mainTextColor,
        fontWeight: 700,
        fontSize:"1rem",
        minWidth: 1,
        marginLeft: "20px"
    }
}))

const Header = () => {
    const classes = useStyles();
    const [selectedTab, setSelectedTab] = useState(0)
    return (
        <>
            <ElevationScroll>
                <AppBar>
                    <Toolbar disableGutters>
                        <Typography variant={"h4"} className={classes.logo}>
                            CodeWithSoumyajeet
                        </Typography>
                        <Tabs value={selectedTab} className={classes.tabContainer}>
                            {
                                mainTabList.map(tab => {
                                   return <Tab
                                                component={Link}
                                                to={tab.path}
                                                className={classes.tabItem}
                                                key={tab.id}
                                                label={tab.name}
                                                onClick={() => setSelectedTab(tab.id)}
                                            />
                                })
                            }
                        </Tabs>
                    </Toolbar>
                </AppBar>
            </ElevationScroll>
            <div className={classes.toolbarMargin}/>
        </>
    )
}

export default Header