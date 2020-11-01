import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { screen, render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Remark } from "../../components/Remark";

const remarkProps = {
    dispatch: jest.fn(),
    gameStatus: "ongoing",
    questionNumber: 8,
    answerIsCorrect: true,
    correctOption: 700,
    setShowResult: jest.fn(),
    showResult: {}
}

describe("Remark", () => {
    test("it renders all components with correct answer", () => {
        render(<Remark {...remarkProps} />);

        expect(screen.queryByText(/absolutely correct/i)).toBeInTheDocument();
    });

    test("it renders all components with correct answer", () => {
        render(<Remark {...remarkProps} answerIsCorrect={false} />);

        expect(screen.queryByText(/the correct answer is/i)).toBeInTheDocument();
    });

    test("it calls next question", () => {
        render(<Remark {...remarkProps} />);

        const button = screen.getByRole("button");

        userEvent.click(button);

        expect(remarkProps.dispatch).toHaveBeenCalledTimes(1);
    });

    test("it calls show result for last question", () => {
        render(<Remark {...remarkProps} questionNumber="10"/>);

        const button = screen.getByRole("button");

        userEvent.click(button);

        expect(remarkProps.setShowResult).toHaveBeenCalledTimes(1);
    });
});