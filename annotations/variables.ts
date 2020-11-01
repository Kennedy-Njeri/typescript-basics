let oranges: number = 5
let speed: string = 'fast'
let hasName: boolean = true

let nothingMuch: null = null

let nothing: undefined = undefined


// built in objects
let now: Date = new Date()


// arrays
let colors: string[] = ["green", "red", "purple"]
let myNumbers: number[] = [1, 2, 3]
let truths: boolean[] = [true, false, true]


// classes

class Car {

}

let car: Car = new Car()

// objects
let point: { x: number; y: number } = {
    x: 30,
    y: 20
}

// functions
const logNumber: (i: number) => void = (i: number) => {
    console.log(i)
}

// when to use annotations
// 1. function that returns 'any' type
const json = '{"x": 20, "y": 30}'
const coordinates: {x: number; y: number} = JSON.parse(json)
console.log(coordinates) // {x: 20, y: 30}


// 2. when we declare a variable on one line and initialize it later

let words = ['red', 'green', 'blue']
let foundWord: boolean


for (let i= 0; i < words.length; i++) {
    if (words[i] === 'green') {
        foundWord = true
    }
}



// 3. variable whose type cannot be inferred correctly
let numbers = [-10, -1, 12]
let numberAboveZero: boolean | number = false


for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] > 0) {
        numberAboveZero = numbers[i]
    }
}

