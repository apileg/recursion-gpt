function factorial(n) {
    return n === 0 ? 1 : n * factorial(n - 1)
}

// 5! = 5 * 4 * 3 * 2 * 1 = 120
console.log(factorial(5))

function fibonacciHelper(n) {
    return n === 0
        ? 0
        : n === 1
        ? 1
        : fibonacciHelper(n - 1) + fibonacciHelper(n - 2)
}

// Fn = Fn-1 + Fn-2
function fibonacci(n) {
    return fibonacciHelper(n)
}
// 0 + 1 + 1 + 2 + 3 + 5 + 8 + 13 + 21 + 34
console.log(fibonacci(8))

const f = ([head, _]) => head
const r = ([_, ...rest]) => rest

function sumArray(arr) {
    return arr.length === 0 ? 0 : f(arr) + sumArray(r(arr))
}

console.log(sumArray([1, 2, 3, 4, 5]))

function findMaxHelper(arr, maybeMax) {
    return arr.length === 0
        ? maybeMax
        : f(arr) > maybeMax
        ? findMaxHelper(r(arr), f(arr))
        : findMaxHelper(r(arr), maybeMax)
}

function findMax(arr) {
    const result = findMaxHelper(arr, -Infinity)
    return result === -Infinity ? undefined : result
}

console.log(findMax([1, 32, 5, 3, 4, 155]))

function reverseString(str) {
    // reverseString('ello')
    // reverseString('llo')
    // reverseString('lo'
    // reverseString('o')
    // reverseString('o')
    // reverseString([])
    // f([])
    // f('o')
    // f('l')
    // f('l')
    // f('e')
    // f('h')
    return str.length === 0 ? "" : reverseString(r(str)) + f(str)
}

const reverseTailly = (str, result) =>
    str === "" ? str : reverseTailly(r(str), f(str) + result)

console.log(reverseString("hello"))

function isPalindrome(str) {
    return str.length === 0 ? "" : reverseString(str) === str ? true : false
}

console.log(isPalindrome("level"))

function powerHelper() {}

// a * a * a * a * a
function power(base, exponent, result = 1) {
    return exponent === 0 ? result : power(base, exponent - 1, result * base)
}

console.log(power(2, 5))

function flattenArray(array, result = []) {
    if (array.length === 0) {
        return result
    }

    const [head, ...rest] = array

    if (Array.isArray(head)) {
        return flattenArray([...head, ...rest], result)
    }

    return flattenArray(rest, [...result, head])
}
// [1, [2, [3, 4]]] -> [2, [3, 4]] -> [3, 4]
console.log(flattenArray([1, [2, [3, 4]]]))
