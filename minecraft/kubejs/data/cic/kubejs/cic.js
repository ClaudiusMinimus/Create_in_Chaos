// Enable recipe logging, off by default
// settings.logAddedRecipes = true
// settings.logRemovedRecipes = true

// Listen to server recipe event
events.listen('recipes', function (event) {

    // Add shaped recipe for golden orchid seeds to nuggets
    event.shaped(item.of('forbidden_arcanus:arcane_gold_nugget'), [
        'SSS',
        'SSS',
        'SSS'
    ], {
        S: 'forbidden_arcanus:golden_orchid_seeds'
    })

    // Add shapeless recipe for sugarcane
    event.shapeless(item.of('minecraft:sugar_cane', 1), ['minecraft:sugar', 'minecraft:stick'])

    // Add shapeless recipe for making sticks from logs
    event.shapeless(item.of('minecraft:stick', 16), [
        '#minecraft:logs', '#minecraft:logs'
    ])

    // Add shaped recipe for bamboo
    event.shaped(item.of('minecraft:bamboo', 1), [
        'R',
        'R',
        'S'
    ], {
        R: '#forge:rods/wooden',
        S: '#minecraft:saplings'
    })

    // Add shapeless recipe for Firework Star
    event.shapeless(item.of('minecraft:firework_star', 1), ['minecraft:gunpowder', '#forge:dyes'])

    // Add shapeless recipe for Firework Rocket
    event.shapeless(item.of('minecraft:firework_rocket', 3), ['minecraft:firework_star', '#forge:paper'])

})
