import {IconButton, SwipeableDrawer, Tab, Tabs, List, ListItem, ListItemText} from "@material-ui/core";
import {Link} from "react-router-dom";
import React from "react";
import {mainTabList} from "../../../utils/uiUtils";
import MenuIcon from '@material-ui/icons/Menu';

export const getTabs = (mainTabList, selectedTab, setSelectedTab, classes) => {
    return(
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
        </Tabs>)
}

export const getDrawer = (mainTabList, openDrawer, setOpenDrawer, classes, selectedTab, setSelectedTab) => {
    const iOS = process.browser && /iPad|iPhone|iPod/.test(navigator.userAgent);
    return (
            <>
                <SwipeableDrawer
                    disableBackdropTransition={!iOS}
                    disableDiscovery={iOS}
                    onClose={() => setOpenDrawer(false)}
                    onOpen={() => setOpenDrawer(true)}
                    open={openDrawer}
                    classes={{paper: classes.drawer}}
                >
                    <List>
                        {
                            mainTabList.map(tab => {
                                return <ListItem
                                                divider
                                                button
                                                key={tab.id}
                                                component={Link}
                                                to={tab.path}
                                                onClick={() => {setOpenDrawer(false);setSelectedTab(tab.id)}}
                                                className={selectedTab === tab.id ? [classes.drawerItem, classes.drawerItemSelected] : classes.drawerItem}
                                                selected = {selectedTab === tab.id}
                                        >
                                    <ListItemText disableTypography>{tab.name}</ListItemText>
                                </ListItem>
                            })
                        }
                    </List>
                </SwipeableDrawer>
                <IconButton
                    onClick={() => setOpenDrawer(!openDrawer)}
                    disableRipple
                    className={classes.drawerIconContainer}
                >
                    <MenuIcon className={classes.drawerIcon}/>
                </IconButton>
            </>
    )
}

export const defaultLink = mainTabList.find(tab => tab.default);

