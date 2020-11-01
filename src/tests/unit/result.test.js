import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { screen, render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Result } from "../../components/Result";

const resultProps = {
    result: 6,
    dispatch: jest.fn()
};

describe("Result", () => {
    test("it renders all components", () => {
        const container = render(<Result {...resultProps} />);

        expect(container).toMatchSnapshot();
    });

    test("it calls new round function", () => {
        render(<Result {...resultProps} />);

        userEvent.click(screen.getByRole("button"));

        expect(resultProps.dispatch).toHaveBeenCalled();
    });
});