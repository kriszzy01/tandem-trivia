import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { screen, render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Home } from "../../components/Home";

const dispatch = jest.fn();

describe("home", () => {
    test("renders all components", () => {
        const { container } = render(<Home />)

        expect(container).toMatchSnapshot();
    });

    test("it calls begin game and toggle checkbox function", () => {
        render(<Home dispatch={dispatch} />);

        userEvent.click(screen.getByRole("button"));
        expect(dispatch).not.toHaveBeenCalled();
        
        userEvent.click(screen.getByRole("checkbox"));
        userEvent.click(screen.getByRole("button"));
        
        expect(dispatch).toHaveBeenCalled();
    });
});