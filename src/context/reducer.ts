import { 
    State, 
    Action 
} from "../types";

import { initialState } from "./state";

export const reducer = (state: State, action: Action) => {
    switch (action.type) {
        case "START_GAME":
            return {
                ...state,
                newRound: action.payload,
                gameStatus: "ongoing"
            }
        case "REPLAY_GAME": 
            return {
                ...state,
                ...initialState,
                newRound: action.payload,
                gameStatus: "idle"
            }
        case "NEXT_QUESTION":
            return {
                ...state,
                questionNumber: action.payload,
                answerIsCorrect: undefined,
                timeLeft: 10
            }
        case "SELECT_ANSWER":
            return {
                ...state,
                answerIsCorrect: action.payload,
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
                gameStatus: "result"
            }
        }
        default:
            return state;
    };
};