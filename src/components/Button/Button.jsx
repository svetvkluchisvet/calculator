import React from "react";
import Style from "./button.module.css"

export const Button = ({value, style, onClick}) => {
    return (
        <button className={Style.button} style={style} value={value} onClick={onClick}>{value}</button>
    );
};