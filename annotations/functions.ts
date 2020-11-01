const add = (a: number, b: number): number => {
    return a + b
}



// works also for anonymous functions

function divide(a: number, b: number): number {
    return a / b
}


const multiply = function (a: number, b: number): number {
    return a * b
}


// void and never

const logger = (message: string): void => {
    console.log(message)
}


const throwError = (message: string): never => {
    throw new Error(message)
}

// destructuring with annotations

const forecast = {
    date: new Date(),
    weather: "sunny"
}

// const logWeather = (forecast: { date: Date; weather: string }): void => {
//     console.log(forecast.date)
//     console.log(forecast.weather)
// }


const logWeather = ({ date, weather}: { date: Date; weather: string }): void => {
    console.log(date)
    console.log(weather)
}

logWeather(forecast)