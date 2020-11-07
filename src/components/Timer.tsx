import React, { useLayoutEffect, useState } from "react";
//import { actionTypes } from "../utils";
import { useGameState } from "../context";

export const Timer: React.FC = () => {
    const [timeLeft, setTimeLeft] = useState(8);

    const [{ answerSelected }, dispatch] = useGameState();

    const fullTimeScale: number = 849.37; //Gotten from the perimeter of the SVG circle, with Radius = 135.25

    const getTimeRatio = (): number => (timeLeft / 8) * fullTimeScale - 0.1;

    useLayoutEffect(() => {
        const startTimer = setTimeout(() => {
            if (timeLeft !== 0 && !answerSelected) {
                setTimeLeft(timeLeft - 1);
            }
        }, 1000);

        if (!answerSelected && timeLeft === 0) {
            dispatch({ type: "TIME_ELAPSED" });
        }

        return () => {
            clearTimeout(startTimer);
        }
    }, [timeLeft, dispatch, answerSelected]);

    return (
        <div className="timer">
            <svg version="1.1" className="timer__svg" viewBox="0 0 300 300" xmlns="http://www.w3.org/2000/svg" >
                <g fill="#fff" strokeLinecap="round" strokeWidth="25">
                    <circle cx="149.72" cy="153.06" r="135.25" stroke="rgb(9, 94, 67)" />
                    <path d="m284.97 153.06a135.25 135.25 0 0 1-135.25 135.25 135.25 135.25 0 0 1-135.25-135.25 135.25 135.25 0 0 1 135.25-135.25 135.25 135.25 0 0 1 135.25 135.25z"
                        stroke={timeLeft !== 0 ? "#1af6b3ff" : "#e31227fc"} strokeDasharray={`${getTimeRatio()} ${fullTimeScale}`} />
                </g>
            </svg>
            <span className={`timer__label | font-base ${timeLeft === 0 ? "color-warning" : "color-tertiary-shade"}`}>
                {timeLeft !== 0 ? timeLeft : "Time Up!"}
            </span>
        </div>
    );
};