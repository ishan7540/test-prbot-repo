// src/calculator.js
export function add(a, b) {
    return a + b
}

export function subtract(a, b) {
    return a - b
}

// NEW: Add multiply function
export function multiply(a, b) {
    return a * b
}

// NEW: Add divide function with error handling
export function divide(a, b) {
    if (b === 0) {
        throw new Error('Division by zero')
    }
    return a / b
}

export function exponent(a, b) {
    return Math.pow(a, b);
}

export function divideby2andadd(a, b) {
    return a / 2 + b / 2;
}