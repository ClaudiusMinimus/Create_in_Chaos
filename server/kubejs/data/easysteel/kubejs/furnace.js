// Listen to server recipe event
onEvent('recipes', event => {

    // Create a function and use that to make things shorter. You can combine multiple actions
    const multiSmelt = (output, input) => {
        event.smelting(output, input)
        event.blasting(output, input)
    }

    //multiSmelt('silentgems:silver_ingot', 'create:crushed_silver_ore')
    multiSmelt('#forge:ingots/tin', 'create:crushed_tin_ore')

})