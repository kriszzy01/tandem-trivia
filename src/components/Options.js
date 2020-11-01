import React, { useMemo } from "react";
import { actionTypes, shuffleQuestions } from "../utils";

export const Options = ({
    allOptions,
    correctOption,
    answerIsCorrect,
    dispatch,
    setShowResult,
    showResult,
    timeLeft }
) => {
    const submitAnswer = option => {
        if (option === correctOption) {
            dispatch({ type: actionTypes.SELECT_ANSWER, payload: true });
            setShowResult({...showResult, result: showResult.result + 1})
        } else {
            dispatch({ type: actionTypes.SELECT_ANSWER, payload: false });
        }
    }

    let shuffleOptions = useMemo(() => shuffleQuestions(allOptions), [allOptions]);

    return (
        <div className={`options`}>
            {shuffleOptions.map((option, index) =>
                <button
                    key={option}
                    onClick={() => submitAnswer(option)}
                    className={answerIsCorrect && option === correctOption ? "options__correct" : ""}
                    disabled={timeLeft < 1}>
                    <span>{option}</span>
                </button>
            )}
        </div>
    );
};