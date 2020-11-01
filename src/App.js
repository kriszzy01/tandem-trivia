import React, { useReducer } from "react";
import "./styles/index.scss";

import {
    reducer,
    initialState
} from "./utils";

import { Question } from "./components/Question";
import { Home } from "./components/Home";

export const App = () => {
    const [state, dispatch] = useReducer(
        reducer,
        initialState
    );

    const { gameStatus } = state;

    return (
        <main>
            {gameStatus === "idle" ?
                <Home gameStatus={gameStatus} dispatch={dispatch} /> :
                <Question {...state} dispatch={dispatch} />
            }
        </main>
    );
};