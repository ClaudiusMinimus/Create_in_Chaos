onEvent('recipes', event => {
  event.recipes.create.filling('immersiveengineering:treated_wood_horizontal', [
    '#minecraft:planks',
    Fluid.of('immersiveengineering:creosote', 100)
  ])
})
