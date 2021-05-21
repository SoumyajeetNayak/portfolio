import {useScrollTrigger} from "@material-ui/core";
import React from "react";

export function ElevationScroll({children}){
    const trigger = useScrollTrigger({
        disableHysteresis: true,
        threshold: 0
    });
    return React.cloneElement(children, {
        elevation: trigger ? 4 : 0
    });
}