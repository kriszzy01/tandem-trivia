import React from "react";
import { render } from "react-dom";
import { App } from "./App";
import { GameProvider, reducer } from "./context";

render(
    <GameProvider reducer={reducer}>
        <React.StrictMode>
            <App />
        </React.StrictMode>
    </GameProvider>,
    document.querySelector("#root")
);