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
                correctAnswer: undefined,
            }
        case "SELECT_ANSWER":
            return {
                ...state,
                correctAnswer: action.payload,
            }
        /*case "START_TIMER": {
            return {
                ...state,
                timeLeft: state.timeLeft - 2
            }
        }*/
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