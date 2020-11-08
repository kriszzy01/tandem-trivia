import React from "react";
import { shuffleArray } from "../utils";
import { useGameState } from "../context";

export const Result: React.FC<{result: number}> = ({ result }) => {
    const [, dispatch] = useGameState();

    const handleNewRound = () => {
        //dispatch({ type: actionTypes.REPLAY_GAME, payload: shuffleQuestions() })
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