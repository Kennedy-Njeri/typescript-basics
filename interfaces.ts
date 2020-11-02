interface Vehicle {
    name: string;
    year: Date;
    broken: boolean
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


// this type annotation is too long and if we had many properties in old civic it would become hard to read
// to solve the problem we use interface
// const printVehicle = (vehicle: { name: string; year: number; broken: boolean }): void => {
//     console.log(`Name: ${vehicle.name}`)
//     console.log(`Year: ${vehicle.year}`)
//     console.log(`Broken: ${vehicle.broken}`)
// }



const printVehicle = (vehicle: Vehicle): void => {
    console.log(vehicle.summary())
    // console.log(`Name: ${vehicle.name}`)
    // console.log(`Year: ${vehicle.year}`)
    // console.log(`Broken: ${vehicle.broken}`)
}


printVehicle(oldCivic)