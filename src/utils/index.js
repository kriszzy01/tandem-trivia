import triviaQuestions from "../assets/trivia_questions.json";

export const actionTypes = {
    START_GAME: "START_GAME",
    REPLAY_GAME: "REPLAY_GAME",
    NEXT_QUESTION: "NEXT_QUESTION",
    SELECT_ANSWER: "SELECT_ANSWER",
    RUN_TIMER: "RUN_TIMER",
    SHOW_RESULT: "SHOW_RESULT"
};

export const initialState = { 
    newRound: [], 
    questionNumber: 1, 
    gameStatus: "idle",
    answerIsCorrect: undefined,
    timeLeft: 10
};

export const reducer = (state, action) => {
    switch (action.type) {
        case actionTypes.START_GAME:
            return {
                ...state,
                newRound: action.payload,
                gameStatus: "ongoing"
            }
        case actionTypes.REPLAY_GAME: 
            return {
                ...state,
                ...initialState,
                newRound: action.payload,
                gameStatus: "idle"
            }
        case actionTypes.NEXT_QUESTION:
            return {
                ...state,
                questionNumber: action.payload,
                answerIsCorrect: undefined,
                timeLeft: 10
            }
        case actionTypes.SELECT_ANSWER:
            return {
                ...state,
                answerIsCorrect: action.payload,
            }
        case actionTypes.RUN_TIMER: {
            return {
                ...state,
                timeLeft: state.timeLeft - 2
            }
        }
        case actionTypes.SHOW_RESULT: {
            return {
                ...state,
                gameStatus: "result"
            }
        }
        default:
            return state;
    };
};

export const randomNumber = (maxLength) => (Math.floor(Math.random() * maxLength));

export const shuffleQuestions = (externalArray) => {
    let array = externalArray ? externalArray: triviaQuestions;
    let randomArray = [];

    for (let i = 0; i <= 30; i++) {
        randomArray.push(array[randomNumber(array.length)])
    }

    let set = Array.from(
        new Set(randomArray)
    ).slice(0, 10);

    return set;
};