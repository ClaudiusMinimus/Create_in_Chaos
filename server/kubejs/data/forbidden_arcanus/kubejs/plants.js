// Enable recipe logging, off by default
// settings.logAddedRecipes = true
// settings.logRemovedRecipes = true

// Listen to server recipe event
events.listen('recipes', function (event) {

    // Add shaped recipe for Forbidden & Arcanus Yellow Orchid
    event.shaped(item.of('forbidden_arcanus:yellow_orchid'), [
        'GNG',
        'NYN',
        'GNG'
    ], {
        G: 'mysticalagriculture:gold_essence',
        N: 'mysticalagriculture:nature_essence',
        Y: 'botania:yellow_mystical_flower'
    })

    // Add shaped recipe for Forbidden Arcanus Mysterywood Sapling
    event.shaped(item.of('forbidden_arcanus:mysterywood_sapling'), [
        'OSO',
        'SYS',
        'OSO'
    ], {
        O: 'forbidden_arcanus:golden_orchid_seeds',
        S: '#minecraft:saplings',
        Y: 'forbidden_arcanus:yellow_orchid'
    })
})
