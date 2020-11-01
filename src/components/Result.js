import React from "react";
import { actionTypes, shuffleQuestions } from "../utils";

export const Result = ({ result, dispatch }) => {
    const handleNewRound = () => {
        dispatch({ type: actionTypes.REPLAY_GAME, payload: shuffleQuestions() })
    }

    return (
        <div className="result center">
            <ul className="result__list">
                <h1>Your Score: {result}/10</h1>
                <li>Incorrect: {`${10 - result}`}</li>
                <li>Correct: {result}</li>
            </ul>

            <button onClick={handleNewRound}>New Round</button>
        </div>
    );
};