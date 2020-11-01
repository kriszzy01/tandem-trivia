import React, { useEffect, useCallback } from "react";
import { actionTypes } from "../utils";

export const CountTimer = ({ 
    answerIsCorrect, 
    dispatch, 
    timeLeft 
}) => {

    const fullTimeScale = 849.37;

    const getTimeRatio = () => (timeLeft / 10) * fullTimeScale - 0.1;

    const startTimer = useCallback(() => {
        if (timeLeft !== 0 && answerIsCorrect === undefined) {
            setTimeout(function start() {
                dispatch({type: actionTypes.RUN_TIMER})
            }, 2000);
        } else return;
    }, [dispatch, timeLeft, answerIsCorrect]);

    useEffect(() => {
        if (answerIsCorrect !== undefined) {
            return;
        } else if (timeLeft !== 0) {
            startTimer();
        } else {
            dispatch({ type: actionTypes.SELECT_ANSWER, payload: false });
        }
    }, [timeLeft, startTimer, dispatch, answerIsCorrect]);

    return (
        <div className="timer">
            <svg version="1.1" className="timer__svg" viewBox="0 0 300 300" xmlns="http://www.w3.org/2000/svg" >
                <g fill="#fff" strokeLinecap="round" strokeWidth="25">
                    <circle cx="149.72" cy="153.06" r="135.25" stroke="rgb(9, 94, 67)" />
                    <path d="m284.97 153.06a135.25 135.25 0 0 1-135.25 135.25 135.25 135.25 0 0 1-135.25-135.25 135.25 135.25 0 0 1 135.25-135.25 135.25 135.25 0 0 1 135.25 135.25z"
                        stroke={timeLeft !== 0 ? "#1af6b3ff": "#e31227fc"} strokeDasharray={`${getTimeRatio()} ${fullTimeScale}`} />
                </g>
            </svg>
            <span className={`timer__label | font-base ${timeLeft === 0 ? "color-warning": "color-tertiary-shade"}`}>
                {timeLeft !== 0 ? timeLeft: "Time Up!"}
            </span>
        </div>
    );
};