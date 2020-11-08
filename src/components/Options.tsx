import React, { useMemo } from "react";
import { shuffleArray } from "../utils";
import { useGameState } from "../context";
import { Question } from "../types";

interface OptionProps {
    allOptions: string[];
    correctOptions: string;
}

export const Options: React.FC<OptionProps> = ({ allOptions, correctOptions }) => {
    const [{ answerSelected, timeElapsed }, dispatch] = useGameState()

    const submitAnswer = (option: string): void => { //Omit Question
        if (option === correctOptions) {
            dispatch({ type: "SELECT_ANSWER", payload: true });
            //setShowResult({...showResult, result: showResult.result + 1})
        } else {
            dispatch({ type: "SELECT_ANSWER", payload: false });
        }
    }

    let shuffleOptions = useMemo(() => shuffleArray<string>(allOptions), [allOptions]);

    return (
        <div className={`options`}>
            {shuffleOptions.map((option, index) =>
                <button
                    key={`${Date.now()} ${index}`}
                    onClick={() => submitAnswer(option)}
                    className={answerSelected && option === correctOptions ? "options__correct" : ""}
                    disabled={!Boolean(timeElapsed) || answerSelected}>
                    <span>{option}</span>
                </button>
            )}
        </div>
    );
};