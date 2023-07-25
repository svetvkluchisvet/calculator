import React from "react";
import Style from "./calculator.module.css";
import {ButtonPanel} from "../ButtonPanel/ButtonPanel";
import {RiChatHistoryLine} from "react-icons/ri";
import {ROUTES} from "../utils/ROUTES";
import {Link} from "react-router-dom";

export const Calculator = () => {


    return (
        <React.Fragment>
            <section className={Style.container}>
                <div className={Style.calculator}>
                    <div className={Style.text}>
                        <div>
                            <h3 className={Style.name}>CityDzen</h3>
                            <p className={Style.type}>SDC-2313</p>
                        </div>
                        <div className={Style.history}>
                            <Link to={ROUTES.HISTORY} className={Style.icon}>
                                <RiChatHistoryLine/>
                            </Link>
                        </div>
                        <div>
                            <input className={Style.box} readOnly={true}/>
                        </div>
                    </div>
                    <ButtonPanel/>
                </div>
            </section>
        </React.Fragment>
    );
};
