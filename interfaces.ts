interface Vehicle {
    name: string;
    year: number;
    broken: boolean
}

const oldCivic = {
    name: "civic",
    year: 2000,
    broken: true
}


// this type annotation is too long and if we had many properties in old civic it would become hard to read
// to solve the problem we use interface
// const printVehicle = (vehicle: { name: string; year: number; broken: boolean }): void => {
//     console.log(`Name: ${vehicle.name}`)
//     console.log(`Year: ${vehicle.year}`)
//     console.log(`Broken: ${vehicle.broken}`)
// }



const printVehicle = (vehicle: Vehicle): void => {
    console.log(`Name: ${vehicle.name}`)
    console.log(`Year: ${vehicle.year}`)
    console.log(`Broken: ${vehicle.broken}`)
}


printVehicle(oldCivic)