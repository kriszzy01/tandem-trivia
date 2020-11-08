export const randomNumber = (maxLength: number): number => (Math.floor(Math.random() * maxLength));

interface ShuffleArray {
    <T>(array: T[]): T[]
}

export const shuffleArray: ShuffleArray = (array) => {
    //let array = externalArray ? externalArray: triviaQuestions;

    let randomArray = [];

    for (let i = 0; i <= 30; i++) {
        randomArray.push(array[randomNumber(array.length)])
    }

    let set = Array.from(
        new Set(randomArray)
    ).slice(0, 10);

    return set;
};