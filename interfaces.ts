interface Reportable {

    summary(): string
}

const oldCivic = {
    name: "civic",
    year: new Date(),
    broken: true,
    summary(): string {
        return `Name: ${this.name}`
    }
}


const drink = {
    color: "red",
    carbonated: true,
    sugar: 40,
    summary(): string {
        return `My drink has ${this.sugar} grams of sugar`
    }
}

// this type annotation is too long and if we had many properties in old civic it would become hard to read
// to solve the problem we use interface
// const printVehicle = (vehicle: { name: string; year: number; broken: boolean }): void => {
//     console.log(`Name: ${vehicle.name}`)
//     console.log(`Year: ${vehicle.year}`)
//     console.log(`Broken: ${vehicle.broken}`)
// }



const printSummary = (item: Reportable): void => {
    console.log(item.summary())
    // console.log(`Name: ${vehicle.name}`)
    // console.log(`Year: ${vehicle.year}`)
    // console.log(`Broken: ${vehicle.broken}`)
}


printSummary(oldCivic)
printSummary(drink)