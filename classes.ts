// instance method modifiers
class Vehicle {

    constructor(public color: string) {
        this.color = color
    }


    // method can be called any where any time
    public driveFast(): void {
        console.log("drive fast")
    }

    // can be called by other methods in this class, or by other methods in child class
    protected driveSlow(): void {
        console.log("to avoid accidents")
    }
}

const vehicle = new Vehicle('red')



// run ts-node classes.ts


// inheritance of classes
// class Car extends Vehicle{
//
//     // theis method can only be called by other methods in the class
//     private drive(): void {
//         console.log("fast it is")
//     }
//
//     startDriving(): void{
//         this.drive()
//         this.driveSlow()
//     }
// }
//
//
// const car = new Car()
//
// car.startDriving()