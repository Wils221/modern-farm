//console.log("Welcome to the main module")
import { createPlan } from './plan.js'
import { createAsparagus } from './seeds/asparagus.js'
import { createPotato } from './seeds/potato.js'
import { createCorn } from './seeds/corn.js'
import { createSoybean } from './seeds/soybean.js'
import { createSunflower } from './seeds/sunflower.js'
import { createWheat } from './seeds/wheat.js'
import { addPlant, usePlants } from './field.js'





const yearlyPlan = createPlan()
console.log(yearlyPlan)

const asparagusSeed = createAsparagus()
//console.log(asparagusSeed)
addPlant(asparagusSeed)

const potatoSeed = createPotato()
addPlant(potatoSeed)

const cornSeed = createCorn()
addPlant(cornSeed)

const soybeanSeed = createSoybean()
addPlant(soybeanSeed)

const sunflowerSeed = createSunflower()
addPlant(sunflowerSeed)

const wheatSeed = createWheat()
addPlant(wheatSeed)