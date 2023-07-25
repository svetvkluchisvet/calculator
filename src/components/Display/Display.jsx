import React from "react";
import Style from "./display.module.css"

export const Display = ({value, placeholder}) => {
    return (
        <React.Fragment>
            <section className={Style.border}>
                <input className={Style.input} readOnly={true} value={value} placeholder={placeholder}/>
            </section>
        </React.Fragment>
    );
};