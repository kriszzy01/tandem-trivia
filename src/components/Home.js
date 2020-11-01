import React, { useState } from "react";
import {
    shuffleQuestions,
    actionTypes
} from "../utils";

export const Home = ({ dispatch }) => {
    const [rulesRead, setRulesRead] = useState(false);
    const [showAlert, setShowAlert] = useState(false);

    const handleBeginGame = () => {
        if (!rulesRead) {
            setShowAlert(true);

            return;
        }

        dispatch({
            type: actionTypes.START_GAME,
            payload: shuffleQuestions()
        })
    };

    const handleToggleCheckbox = () => {
        setRulesRead(!rulesRead);
        setShowAlert(false)
    };

    return (
        <section className="home">
            <header>
                <h1>Tandem Trivia</h1>
            </header>

            <div className="rules | gap-top-500">
                <h2>Game Rules</h2>
                <div className="gap-top-400">
                    <ul className="rules__list | flow">
                        <li>A Round has Ten(10) Random questions.</li>
                        <li>Each correct answer equals One(1) point.</li>
                        <li>Each question has a Time Limit of Ten(seconds).</li>
                        <li className="color-neutral">!--Answers SHUFFLE randomly every two seconds, so be CAREFULL and QUICK when selecting--!</li>
                    </ul>
                </div>
            </div>

            <div className="gap-top-500">
                <label htmlFor="rulesCheck">
                    <input
                        id="rulesCheck"
                        type="checkbox"
                        value="rulesRead"
                        onClick={handleToggleCheckbox}
                    />
                    <span>I'm Ready!</span>
                </label>
            </div>

            <button
                className="center | gap-top-500"
                onClick={handleBeginGame}
            >Start Game</button>

            {showAlert && <p className="center">Click the checkbox</p>}
        </section>
    );
};