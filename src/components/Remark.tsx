import React, { useMemo, SetStateAction } from "react";
import { randomNumber } from "../utils";
import { useGameState } from "../context";

interface RemarkProps {
    correctOption: string;
    setShowResult: React.Dispatch<SetStateAction<{ result: number, isResultPage: boolean }>>;
    showResult: { result: number, isResultPage: boolean }
}

interface Remarks {
    correct: string[];
    incorrect: string[];
}

const remarks: Remarks = {
    correct: ["You beautiful Genius!", "Einstein would be proud of you!", "You're almost smarter than me!", "You deserve an electronic kiss!"],
    incorrect: ["I think I overestimated your IQ!", "How could you fail that!", "Shamefully Wrong!", "I knew this even without a brain"]
};

export const Remark: React.FC<RemarkProps> = ({
    correctOption,
    setShowResult,
    showResult }

) => {

    const [state, dispatch] = useGameState();

    const { gameStatus, currentQuestion, answerSelected, timeElapsed } = state;

    const randomNum = useMemo(() => randomNumber(4), [correctOption]);

    const nextQuestion = () => {
        if (gameStatus !== "idle" && currentQuestion < 10) {
            dispatch({
                type: "NEXT_QUESTION",
                payload: currentQuestion + 1
            });
        }
    };

    const handleShowResult = () => {
        setShowResult({
            ...showResult,
            isResultPage: true
        })
    }

    return (
        <div className={`remark ${answerSelected === undefined ? "remark__hidden" : ""}`}>
            <svg role="" version="1.1" viewBox="0 0 91.714 61.373" xmlns="http://www.w3.org/2000/svg">
                <path d="m17.708 45.605 9.2181 5.5794-25.471 9.4607 15.768-8.7329z" fill="#fff" />
                <g transform="matrix(.92162 0 0 .91569 -2.9371 -10.988)" fill="#fff">
                    <path d="m8.552 32.501c1.9338-4.4356 5.3737-8.1111 9.377-10.829 4.0033-2.7182 8.5601-4.5292 13.206-5.881 17.821-5.1847 37.796-3.5443 53.886 5.7052 4.1676 2.3957 8.1674 5.3903 10.592 9.541 1.7457 2.9885 2.5898 6.472 2.5683 9.933-0.02146 3.4609-0.89274 6.8958-2.3761 10.023-2.9667 6.2541-8.2792 11.154-14.184 14.766-13.29 8.1283-29.947 10.159-45.071 6.4243-8.962-2.2131-17.68-6.5583-23.486-13.735-2.9029-3.5884-5.0211-7.8449-5.8922-12.378-0.87117-4.5327-0.46476-9.3383 1.3798-13.569z" fill="#fff" />
                </g>
            </svg>

            <div className="remark__comments imposter">
                <p>
                    {
                        answerSelected === true && Boolean(timeElapsed) ?
                            remarks.correct[randomNum] :
                            `${remarks.incorrect[randomNum]}`
                    }
                </p>
                {!answerSelected && <p>The correct answer is <span className="color-tertiary-shade weight-bold">{correctOption}</span></p>}
                {answerSelected && <p>Absolutely Correct!</p>}
            </div>

            {currentQuestion < 10 ?
                <button
                    onClick={nextQuestion}>
                    Next Question
                </button> :
                <button
                    onClick={handleShowResult}>
                    View Result
                </button>
            }
        </div>
    );
};
