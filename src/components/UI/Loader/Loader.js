import React from "react";
import classes from "./Loader.module.scss"


export const Loader = props => {
    return (
        <div className={classes.Center}>
            <div className={classes.Loader} />
        </div>  
    )
}