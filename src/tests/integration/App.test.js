import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { screen, render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { App } from "../../App";

beforeEach(() => {
    render(<App />)
})

describe("App", () => {
    test("it renders all home components", () => {
        expect(screen.getAllByRole("heading")).toHaveLength(2);
        expect(screen.getByRole("list")).toBeInTheDocument();
        expect(screen.getByRole("checkbox")).toBeInTheDocument();
        expect(screen.getByRole("button", {name: /start game/i})).toBeInTheDocument()
    });

    test("it renders checklist alert if checkbox not clicked", () => {

        expect(screen.queryByText(/click the checkbox/i)).toBeNull();

        userEvent.click(screen.getByRole("button", {name: /start game/i}));
        
        expect(screen.queryByText(/click the checkbox/i)).toBeInTheDocument();
    });

    test("it renders questions components", () => {
        userEvent.click(screen.getByRole("checkbox"));

        userEvent.click(screen.getByRole("button", {name: /start game/i}));
        
        expect(screen.getByRole("heading"));
        
        expect(screen.getAllByRole("button")).toHaveLength(5);
    });
});