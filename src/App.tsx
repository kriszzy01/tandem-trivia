import React from "react";
import { useGameState } from "./context";
import { QuizQuestion } from "./components/Question";
import { Home } from "./components/Home";
import "./styles/index.scss";


export const App: React.FC = () => {
    const [{ gameStatus }, ] = useGameState();

    return (
        <main>
            {gameStatus === "idle" ?
                <Home /> :
                <QuizQuestion />
            }
        </main>
    );
};