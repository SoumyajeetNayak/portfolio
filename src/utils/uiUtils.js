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

export const mainTabList = [
    {id: 0, name: "Home", path: "/", component: () => <div>Home</div>, default: true},
    {id: 1, name: "Blog", path: "/blog", component: () => <div>Blog</div>, default: true},
    {id: 2, name: "Courses", path: "/courses", component: () => <div>Courses</div>, default: true},
    {id: 3, name: "Interview", path: "/interview", component: () => <div>Interview</div>, default: true},
    {id: 4, name: "About", path: "/about", component: () => <div>About</div>, default: true},
]

