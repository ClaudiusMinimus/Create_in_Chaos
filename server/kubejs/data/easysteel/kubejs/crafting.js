// Listen to server recipe event
onEvent('recipes', event => {

    // Add shaped recipe for Easy Steel Raw Bronze
    event.shaped(item.of('easy_steel:raw_bronze', 4),
        [
            'TC',
            'CC'
        ], {
            T: 'create:crushed_tin_ore',
            C: 'create:crushed_copper_ore'
        }
    )

})