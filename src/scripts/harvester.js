export const harvestPlants = (plantsArray) => {
    let output = ""
    let seedObjects = [];
    for (const plant of plantsArray) {
        if (plant.type === "Corn"){
            output = plant.output/2
        } else {
            output = plant.output
        }
        for ( let i = 0; i < output; i++) {
            seedObjects.push(plant)
        }
    }
    return seedObjects
}


