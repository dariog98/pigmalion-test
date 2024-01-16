import { findSumInArray, resolver } from './index.js'

describe('resolver', () => {
    test('given an array [1,4,3,9] and a result of 8 it should return false', () => {
        const expected = false
        const result = resolver([1,4,3,9], 8) 
        expect(expected).toBe(result)
    }),
    test('given an array [1,2,4,4] and a result of 8 it should return true', () => {
        const expected = true
        const result = resolver([1,2,4,4], 8) 
        expect(expected).toBe(result)
    })
})

describe('findSumInArray', () => {
    test('given an array [1,4,3,9] and a result of 8 it should return false', () => {
        const expected = false
        const result = findSumInArray([1,4,3,9], 8) 
        expect(expected).toBe(result)
    }),
    test('given an array [1,2,4,4] and a result of 8 it should return true', () => {
        const expected = true
        const result = findSumInArray([1,2,4,4], 8) 
        expect(expected).toBe(result)
    })
})