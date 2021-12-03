import {partOne, partTwo, countIncreases, countWindowIncreases} from "./day1";
describe('day1', () => {
    test('empty', () => {
        expect(countIncreases([])).toEqual(0)
    })
    test('one increase', () => {
        expect(countIncreases([1, 2])).toEqual(1)
    })
    test('two consecutive increases', () => {
        expect(countIncreases([1, 2, 3])).toEqual(2)
    })
    test('two increases', () => {
        expect(countIncreases([1, 2, 1, 2])).toEqual(2)
    })
    test('part1', () => {
        let partOneAnswer = partOne("day1/input.txt");
        expect(partOneAnswer).toBeGreaterThan(0);
        console.log(`Part one: ${partOneAnswer}`);
    })
    test('zero when not enough numbers', () => {
        expect(countWindowIncreases([])).toEqual(0)
        expect(countWindowIncreases([1, 2])).toEqual(0)
        expect(countWindowIncreases([1, 2, 3])).toEqual(0)
    })
    test('window one increase', () => {
        expect(countWindowIncreases([1, 2, 1, 2])).toEqual(1)
    })
    test('window two increases', () => {
        expect(countWindowIncreases([1, 2, 1, 2, 3])).toEqual(2)
        expect(countWindowIncreases([1, 1, 1, 1, 1, 2, 2])).toEqual(2)
        expect(countWindowIncreases([1, 1, 1, 1, 1, 2, 1, 2])).toEqual(2)
        expect(countWindowIncreases([1, 1, 1, 1, 1, 2, 1, 1, 1, 1, 2, 1, 1, 1, 1, 1, ])).toEqual(2)
    })
    test('part2', () => {
        let partTwoAnswer = partTwo("day1/input.txt");
        expect(partTwoAnswer).toBeGreaterThan(0);
        console.log(`Part two: ${partTwoAnswer}`);
    })
})