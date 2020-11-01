import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { screen, render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Question } from "../../components/Question";

const testQuestions = [{
    "question": "Approximately how many grapes go into a bottle of wine?",
    "incorrect": ["500", "200", "1000"],
    "correct": "700"
},
{
    "question": "How much does a US One Dollar Bill cost to make?",
    "incorrect": ["$0.25", "$1", "$5"],
    "correct": "$0.05"
},];

const questionProps = {
    newRound: testQuestions,
    questionNumber: 1,
    gameStatus: "idle",
    answerIsCorrect: undefined,
    timeLeft: 10
};

describe("Question", () => {
    test("it renders all components", () => {
        const { container } = render(<Question {...questionProps} />);

        expect(container).toMatchSnapshot();
        expect(container.querySelector(".question")).toBeInTheDocument();
    });
});