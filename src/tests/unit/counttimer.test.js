import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { screen, render } from "@testing-library/react";
import { CountTimer } from "../../components/CountTimer";

const countTimerProps = {
    answerIsCorrect: undefined,
    dispatch: jest.fn(),
    timeLeft: 10
};

jest.useFakeTimers();

describe("Count Timer", () => {
    test("it renders component", () => {
        const { container } = render(<CountTimer {...countTimerProps} />);

        expect(container.querySelector(".timer")).toBeInTheDocument();
        expect(container.querySelector(".timer__svg")).toBeInTheDocument();
        expect(screen.getByText("10")).toBeInTheDocument();
    });

    test("it calls start timer handler", async () => {
        render(<CountTimer {...countTimerProps} />);

        expect(setTimeout).toHaveBeenLastCalledWith(expect.any(Function), 2000);
    });

    test("it dispatches select answer handler if time elapses", () => {
        render(<CountTimer {...countTimerProps} timeLeft={0}/>);

        expect(countTimerProps.dispatch).toHaveBeenCalled();
    });
});