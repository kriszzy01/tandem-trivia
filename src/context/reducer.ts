import { 
    State, 
    Action,
    GameStatus 
} from "../types";

import { initialState } from "./state";

export const reducer = (state: State, action: Action): State => {
    switch (action.type) {
        case "START_GAME":
            return {
                ...state,
                gameRound: action.payload,
                gameStatus: GameStatus.ONGOING
            }
        case "REPLAY_GAME": 
            return {
                ...state,
                ...initialState,
                gameRound: action.payload,
                gameStatus: GameStatus.IDLE
            }
        case "NEXT_QUESTION":
            return {
                ...state,
                currentQuestion: action.payload,
               answerSelected: false,
               timeElapsed: true
            }
        case "SELECT_ANSWER":
            return {
                ...state,
                answerSelected: true,
            }
        case "TIME_ELAPSED": {
            return {
                ...state,
                timeElapsed: true
            }
        }
        case "END_GAME": {
            return {
                ...state,
                gameStatus: GameStatus.COMPLETED
            }
        }
        default:
            return state;
    };
};