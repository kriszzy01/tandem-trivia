import React, { 
    useReducer, 
    createContext, 
    useContext
} from "react";

import { State, GameStatus, Action } from "../types";

export const initialState: State = {
    gameRound: [],
    currentQuestion: 1,
    gameStatus: GameStatus.IDLE,
    answerSelected: undefined,
    timeElapsed: 8
};

const GameContext = createContext<[State, React.Dispatch<Action>]>([
    initialState,
    () => initialState
]);

interface GameProviderProps {
    reducer: React.Reducer<State, Action>;
    children: React.ReactNode;
}

export const GameProvider: React.FC<GameProviderProps> = ({
    reducer, 
    children
}) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    return (
        <GameContext.Provider value={[state, dispatch]}>
            {children}
        </GameContext.Provider>
    );
};

export const useGameState = () => useContext(GameContext);