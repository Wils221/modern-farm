import { createAsparagus } from './seeds/asparagus.js'
import { createPotato } from './seeds/potato.js'
import { createCorn } from './seeds/corn.js'
import { createSoybean } from './seeds/soybean.js'
import { createSunflower } from './seeds/sunflower.js'
import { createWheat } from './seeds/wheat.js'
import { addPlant } from './field.js'

export const plantSeeds = (plantArray) => { 
    for (const array of plantArray) {
        for (const type of array){
            if (type === "Asparagus") {
                let asparagusSeed = createAsparagus()
                addPlant(asparagusSeed)
            }
            if (type === "Potato") {
                let potatoSeed = createPotato()
                addPlant(potatoSeed) 
            }
            if (type === "Soybean") {
                let soybeanSeed = createSoybean()
                addPlant(soybeanSeed) 
            }
            if (type === "Corn") {
                let cornSeed = createCorn()
                addPlant(cornSeed) 
            }
            if (type === "Sunflower") {
                let sunflowerSeed = createSunflower()
                addPlant(sunflowerSeed) 
            }
            if (type === "Wheat") {
                let wheatSeed = createWheat()
                addPlant(wheatSeed) 
            }
        }
    }
}