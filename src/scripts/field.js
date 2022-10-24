let growingArray = []

export const addPlant = (seeds) => {
    if (Array.isArray(seeds)) {
        for (const cornSeed of seeds) {
            growingArray.push(cornSeed)
        }
    } else {
        growingArray.push(seeds)
    }
}


export const usePlants = () => {
    return growingArray.map(growingArray => ({ ...growingArray }))
}