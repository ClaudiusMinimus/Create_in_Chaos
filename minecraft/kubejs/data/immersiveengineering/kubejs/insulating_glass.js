// Listen to server recipe event
onEvent('recipes', event => {

    // Add shaped recipe for Immersive Engineering Insulating Glass
    event.shaped(item.of('immersiveengineering:insulating_glass', 2),
        [
            ' G ',
            'IDI',
            ' G '
        ], {
            G: '#forge:glass',
            I: 'create:crushed_iron_ore',
            D: '#forge:dyes/green'
        }
    )

})
