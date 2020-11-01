const carMake: string[] = ["ford", "Toyota", "nissan"]


// two dimensional

const carByMake: string[][] = []


// helps with inference when extracting values

const car = carMake[0]
const myCar = carMake.pop()


// prevent incompatible values

carMake.push("toyota")

// helps with map

carMake.map((car: string): string => {
    return car
})

// flexible types

const importantDates: (Date | string)[] = [new Date()]
importantDates.push('2020-08-08')
importantDates.push(new Date())



const numChar: (string | number)[] = ["ken", 123]

numChar.push("joe")
numChar.push(456)


