import {readNumberArray} from "../reader";

export const countIncreases = (numbers: number[]) => {
    let increases: number = 0;
    for (let index = 1; index < numbers.length; index++) {
        if (numbers[index] > numbers[index-1]) {
            increases++;
        }
    }
    return increases
}

export const partOne = (path: string) => {
    return countIncreases(readNumberArray(path));
} 