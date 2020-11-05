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
    correctAnswer: Question | undefined;
    timeElapsed: boolean;
}

export type Action =
    | { type: "START_GAME", payload: Question[] }
    | { type: "REPLAY_GAME", payload: Question[] }
    | { type: "NEXT_QUESTION", payload: number }
    | { type: "SELECT_ANSWER", payload: Question }
    | { type: "START_TIMER" }
    | { type: "END_GAME" }
