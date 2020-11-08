export interface Question {
    question: string;
    incorrect: string[];
    correct: string;
}

export enum GameStatus {
    IDLE = "idle",
    ONGOING = "ongoing",
    COMPLETED = "completed"
}

export interface State {
    gameRound: Question[];
    currentQuestion: number;
    gameStatus: GameStatus;
    answerSelected: boolean | undefined;
    timeElapsed: number;
}

export type Action =
    | { type: "START_GAME", payload: Question[] }
    | { type: "REPLAY_GAME", payload: Question[] }
    | { type: "NEXT_QUESTION", payload: number }
    | { type: "SELECT_ANSWER", payload: boolean }
    | { type: "TIME_ELAPSED" }
    | { type: "END_GAME" }
    | { type: "RUN_TIMER" }
