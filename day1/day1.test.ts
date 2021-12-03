import {partOne} from "./day1";
import {countIncreases} from "./day1";
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
})