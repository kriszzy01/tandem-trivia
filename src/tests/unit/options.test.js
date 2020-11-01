import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { screen, render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Options } from "../../components/Options";

const optionsProps = {
    allOptions: ["500", "200", "1000", "700"],
    correctOption: "700",
    answerIsCorrect: false,
    dispatch: jest.fn(),
    setShowResult: jest.fn(),
    showResult: false,
    timeLeft: 6
}

describe("Option", () => {
    test("it renders all components", () => {
        render(<Options {...optionsProps} />);

        expect(screen.getAllByRole("button")).toHaveLength(4);
    });

    test("it calls submit answer function for wrong answer", () => {
        render(<Options {...optionsProps} />);

        const button = screen.getByText("500"); //Wrong answer
        userEvent.click(button);

        expect(optionsProps.dispatch).toHaveBeenCalled();
        expect(optionsProps.setShowResult).not.toHaveBeenCalled()
    });

    test("it calls submit answer function for right answer", () => {
        render(<Options {...optionsProps} />);

        const button = screen.getByText("700"); //Right answer
        userEvent.click(button);

        expect(optionsProps.dispatch).toHaveBeenCalled();
        expect(optionsProps.setShowResult).toHaveBeenCalled()
    });
});