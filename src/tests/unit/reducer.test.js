import "@testing-library/jest-dom/extend-expect";
import {
    reducer,
    initialState,
    actionTypes
} from "../../utils";

const testQuestions = [{
    "question": "Approximately how many grapes go into a bottle of wine?",
    "incorrect": ["500", "200", "1000"],
    "correct": "700"
},
{
    "question": "How much does a US One Dollar Bill cost to make?",
    "incorrect": ["$0.25", "$1", "$5"],
    "correct": "$0.05"
},];

describe("Reducer", () => {
    test("it should return initial state", () => {
        const expectedState = initialState;

        const newState = reducer(initialState, {});

        expect(newState).toEqual(expectedState);
    });

    test("it should update shuffled rounds, and game status states", () => {
        const expectedState = {
            ...initialState,
            newRound: testQuestions,
            gameStatus: "ongoing"
        };

        const action = {type: actionTypes.START_GAME, payload: testQuestions};

        const newState = reducer(initialState, action);

        expect(newState).toEqual(expectedState);
    });

    test("it should update shuffled rounds and game status states", () => {
        const expectedState = {
            ...initialState,
            newRound: testQuestions,
        };

        const action = {type: actionTypes.REPLAY_GAME, payload: testQuestions};

        const newState = reducer(initialState, action);

        expect(newState).toEqual(expectedState);
    });

    test("it should update question number and time left state", () => {
        const expectedState = {
            ...initialState,
            questionNumber: 2,
            timeLeft: 10
        };

        const action = {type: actionTypes.NEXT_QUESTION, payload: 2};

        const newState = reducer(initialState, action);

        expect(newState).toEqual(expectedState);
    });

    test("it should update correct answer state", () => {
        const expectedState = {
            ...initialState,
            answerIsCorrect: true
        };

        const action = {type: actionTypes.SELECT_ANSWER, payload: true};

        const newState = reducer(initialState, action);

        expect(newState).toEqual(expectedState);
    });

    test("it should update reamining time state", () => {
        const expectedState = {
            ...initialState,
            timeLeft: 8
        };

        const action = {type: actionTypes.RUN_TIMER};

        const newState = reducer(initialState, action);

        expect(newState).toEqual(expectedState);
    });

    test("it should update show result state", () => {
        const expectedState = {
            ...initialState,
            gameStatus: "result"
        };

        const action = {type: actionTypes.SHOW_RESULT};

        const newState = reducer(initialState, action);

        expect(newState).toEqual(expectedState);
    })
});