import {Button} from "../Button/Button";
import React from "react";
import Style from "./buttonPanel.module.css"
import {Display} from "../Display/Display";
import {useDispatch, useSelector} from "react-redux";
import {setEqual, setOperation, setClear} from './../utils/actions'
import {CALCULATOR_KEY} from "../utils/calculator.reducer";

export const ButtonPanel = () => {

    const number = '0';

    const view = useSelector((state) => {
        return state[CALCULATOR_KEY]
    });
    const dispatch = useDispatch();

    const handleAnswer = (e) => {
        e.preventDefault();
        dispatch(setEqual())
    };

    return (
        <React.Fragment>
            <section>
                <div className={Style.display}>
                    <Display
                        value={(view.answer).length === 0 ? view.number : view.answer}
                        placeholder={number}
                    />
                </div>
                <div className={Style.buttons}>
                    <Button
                        value={1}
                        onClick={() => dispatch(setOperation(1))}
                        style={{
                            display: 'grid',
                            gridRow: '1/2',
                            gridColumn: '1/2'
                        }}
                    />
                    <Button
                        value={2}
                        onClick={() => dispatch(setOperation(2))}
                        style={{
                            display: 'grid',
                            gridRow: '1/2',
                            gridColumn: '2/3'
                        }}
                    />
                    <Button
                        value={3}
                        onClick={() => dispatch(setOperation(3))}
                        style={{
                            display: 'grid',
                            gridRow: '1/2',
                            gridColumn: '3/4'
                        }}
                    />
                    <Button
                        value="/"
                        onClick={() => dispatch(setOperation('/'))}
                        style={{
                            display: 'grid',
                            gridRow: '1/2',
                            gridColumn: '4/5'
                        }}
                    />
                    <Button
                        value="C"
                        onClick={() => dispatch(setClear())}
                        style={{
                            display: 'grid',
                            gridRow: '1/3',
                            gridColumn: '5/6'
                        }}
                    />
                    <Button
                        value={4}
                        onClick={() => dispatch(setOperation(4))}
                        style={{
                            display: 'grid',
                            gridRow: '2/3',
                            gridColumn: '1/2'
                        }}
                    />
                    <Button
                        value={5}
                        onClick={() => dispatch(setOperation(5))}
                        style={{
                            display: 'grid',
                            gridRow: '2/3',
                            gridColumn: '2/3'
                        }}
                    />
                    <Button
                        value={6}
                        onClick={() => dispatch(setOperation(6))}
                        style={{
                            display: 'grid',
                            gridRow: '2/3',
                            gridColumn: '3/4'
                        }}
                    />
                    <Button
                        value="*"
                        onClick={() => dispatch(setOperation('*'))}
                        style={{
                            display: 'grid',
                            gridRow: '2/3',
                            gridColumn: '4/5'
                        }}
                    />
                    <Button
                        value="="
                        onClick={handleAnswer}
                        style={{
                            display: 'grid',
                            gridRow: '3/5',
                            gridColumn: '5/6'
                        }}
                    />
                    <Button
                        value={7}
                        onClick={() => dispatch(setOperation(7))}
                        style={{
                            display: 'grid',
                            gridRow: '3/4',
                            gridColumn: '1/2'
                        }}
                    />
                    <Button
                        value={8}
                        onClick={() => dispatch(setOperation(8))}
                        style={{
                            display: 'grid',
                            gridRow: '3/4',
                            gridColumn: '2/3'
                        }}
                    />
                    <Button
                        value={9}
                        onClick={() => dispatch(setOperation(9))}
                        style={{
                            display: 'grid',
                            gridRow: '3/4',
                            gridColumn: '3/4'
                        }}
                    />
                    <Button
                        value="+"
                        onClick={() => dispatch(setOperation('+'))}
                        style={{
                            display: 'grid',
                            gridRow: '3/4',
                            gridColumn: '4/5'
                        }}
                    />
                    <Button
                        value={0}
                        onClick={() => dispatch(setOperation(0))}
                        style={{
                            display: 'grid',
                            gridRow: '4/5',
                            gridColumn: '1/3'
                        }}
                    />
                    <Button
                        value="."
                        onClick={() => dispatch(setOperation('.'))}
                        style={{
                            display: 'grid',
                            gridRow: '4/5',
                            gridColumn: '3/4'
                        }}
                    />
                    <Button
                        value="-"
                        onClick={() => dispatch(setOperation('-'))}
                        style={{
                            display: 'grid',
                            gridRow: '4/5',
                            gridColumn: '4/5'
                        }}
                    />
                </div>
            </section>
        </React.Fragment>
    );
};