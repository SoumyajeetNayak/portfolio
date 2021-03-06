const {createMuiTheme} = require("@material-ui/core/styles");

const cwsBlue = "#358597";
const cwsOrange = "#F4A896";
const cwsWhite = "#FFFFFE";

export default createMuiTheme({
    palette:{
        common:{
           blue: `${cwsBlue}`,
            orange: `${cwsOrange}`
        },
        primary:{
            main:`${cwsBlue}`,
        },
        secondary:{
           main: `${cwsOrange}`,
        },
        tertiary: {
            main:`${cwsWhite}`,
        }
    },
    typography:{
        h4:{
            fontWeight:400,
        },
        mainTextColor: {
            color:`${cwsWhite}`
        },
        tabItem: {
            color:`${cwsWhite}`,
            fontWeight: 700,
            fontSize:"1rem",
            minWidth: 1,
            marginLeft: "20px",
            fontFamily: "Raleway"
        }
    },
})