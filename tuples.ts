const drink = {
    color: "red",
    carbonated: true,
    sugar: 40
}


//const pepsi: [string, boolean, number] = ["red", true, 40]


// now we use type alias
type Drink = [string, boolean, number]

const pepsi: Drink = ["red", true, 40]

const sprite: Drink = ['green', true, 30]

const tea: Drink = ["brown", false, 20]