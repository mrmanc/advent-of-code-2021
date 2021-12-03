import {readNumberArray} from "../reader";

export const countIncreases = (numbers: number[]) => {
    let increases: number = 0;
    for (let index = 1; index < numbers.length; index++) {
        if (numbers[index] > numbers[index - 1]) {
            increases++;
        }
    }
    return increases
}
export const countWindowIncreases = (numbers: number[]) => {
    let increases: number = 0;
    if (numbers.length > 3) {
        for (let index = 3; index < numbers.length; index++) {
            if (numbers[index] + numbers[index-1] + numbers[index-2] > numbers[index - 1] + numbers[index - 2] + numbers[index - 3]) {
                increases++;
            }
        }
    }
    return increases
}

export const partOne = (path: string) => {
    return countIncreases(readNumberArray(path));
}

export const partTwo = (path: string) => {
    return countWindowIncreases(readNumberArray(path));
} 