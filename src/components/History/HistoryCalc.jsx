import Style from './historyCalc.module.css'
import {useSelector} from "react-redux";
import {CALCULATOR_KEY} from "../utils/calculator.reducer";


export const HistoryCalc = () => {
    const view = useSelector((state) => {
        return state[CALCULATOR_KEY]
    });

    const numArray = [];
    const handleHistory = () => {
        return numArray.push(view.number + ' = ' + view.answer);
    };

    return (
        <div>
            <div className={Style.paper}>
                <div className={Style.lines}>
                    <div
                        className={Style.text}
                        contentEditable={true}
                        spellCheck={false}
                        handlehisory={handleHistory()}
                        suppressContentEditableWarning={true}
                    >
                        {(view.answer).length === 0 ? view.number : numArray}
                    </div>
                </div>
            </div>
        </div>
    );
};