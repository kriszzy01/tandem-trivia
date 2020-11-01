import React, { useState } from "react";
import { Options } from "./Options";
import { Remark } from "./Remark";
import { CountTimer } from "./CountTimer";
import { Result } from "./Result";

export const Question = ({
    newRound,
    questionNumber,
    gameStatus,
    answerIsCorrect,
    timeLeft,
    dispatch
}) => {
    const [showResult, setShowResult] = useState({
        result: 0,
        isResultPage: false,
    })

    const selectedQuestion = newRound[questionNumber - 1];

    const incorrectOptions = selectedQuestion.incorrect;

    const correctOptions = selectedQuestion.correct;

    const allOptions = incorrectOptions.concat(correctOptions);

    return (
        <>
            {!showResult.isResultPage ?
                <section className="question | flow">
                    <div className="question__header | splitter">
                        <h2 className="center">{`Question ${questionNumber}/${newRound.length}`}</h2>
                        <CountTimer
                            answerIsCorrect={answerIsCorrect}
                            timeLeft={timeLeft}
                            dispatch={dispatch} />
                    </div>

                    <div className="question__main">
                        <svg width="366.86" height="245.49" version="1.1" viewBox="0 0 91.714 61.373" xmlns="http://www.w3.org/2000/svg">
                            <g fill="#fff">
                                <g transform="matrix(.92162 0 0 .91569 -2.9371 -10.988)">
                                    <path d="m8.552 32.501c1.9338-4.4356 5.3737-8.1111 9.377-10.829 4.0033-2.7182 8.5601-4.5292 13.206-5.881 17.821-5.1847 37.796-3.5443 53.886 5.7052 4.1676 2.3957 8.1674 5.3903 10.592 9.541 1.7457 2.9885 2.5898 6.472 2.5683 9.933-0.02146 3.4609-0.89274 6.8958-2.3761 10.023-2.9667 6.2541-8.2792 11.154-14.184 14.766-13.29 8.1283-29.947 10.159-45.071 6.4243-8.962-2.2131-17.68-6.5583-23.486-13.735-2.9029-3.5884-5.0211-7.8449-5.8922-12.378-0.87117-4.5327-0.46476-9.3383 1.3798-13.569z" fill="#fff" />
                                </g>
                                <ellipse cx="76.883" cy="52.245" rx="5.2077" ry="4.9838" strokeLinecap="round" strokeWidth="7.1216" />
                                <ellipse cx="84.947" cy="58.405" rx="3.4158" ry="2.8559" strokeLinecap="round" strokeWidth="4.3661" />
                            </g>
                        </svg>
                        <p className="imposter | color-tertiary-shade">{selectedQuestion.question}</p>
                    </div>

                    <Options
                        allOptions={allOptions}
                        correctOption={correctOptions}
                        dispatch={dispatch}
                        timeLeft={timeLeft}
                        answerIsCorrect={answerIsCorrect}
                        setShowResult={setShowResult}
                        showResult={showResult}
                    />

                    <Remark
                        dispatch={dispatch}
                        gameStatus={gameStatus}
                        questionNumber={questionNumber}
                        answerIsCorrect={answerIsCorrect}
                        correctOption={correctOptions}
                        setShowResult={setShowResult}
                        showResult={showResult}
                    />
                </section> :
                <Result 
                    result={showResult.result} 
                    dispatch={dispatch}/>
            }
        </>
    );
};