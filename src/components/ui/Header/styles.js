import {makeStyles} from "@material-ui/styles";
const useStyles = makeStyles(theme => ({
    toolbarMargin: {
        ...theme.mixins.toolbar
    },
    logo: {
        ...theme.typography.mainTextColor,
        marginLeft: "5rem",
        fontWeight:"bolder",
        fontSize: "2rem",
        textTransform: "none",
        "&:hover": {
            backgroundColor: "transparent"
        },
        [theme.breakpoints.down("md")]: {
            marginLeft: "3rem"
        },
        [theme.breakpoints.down("xs")]: {
            marginLeft: "0.1rem",
            fontSize: "1.5rem"
        }
    },
    tabContainer:{
        marginLeft: "auto",
        marginRight: "200px"
    },
    tabItem:{
        ...theme.typography.tabItem
    },
    drawerIconContainer: {
        ...theme.typography.mainTextColor,
        marginLeft:"auto",
        "&:hover": {
            backgroundColor: "transparent"
        }
    },
    drawerIcon: {
        height: "35px",
        width:"35px"
    },
    drawer:{
        backgroundColor: theme.palette.common.blue
    },
    drawerItem: {
        ...theme.typography.tabItem,
        opacity: 0.7
    },
    drawerItemSelected: {
        ...theme.typography.tabItem,
        opacity: 1
    }
}))
export default useStyles