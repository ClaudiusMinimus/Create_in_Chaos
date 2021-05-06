// Enable recipe logging, off by default
// settings.logAddedRecipes = true
// settings.logRemovedRecipes = true

// Listen to server recipe event
events.listen('recipes', function (event) {
    event.remove({output: '#forge:dusts/iron'})
    event.remove({output: '#forge:dusts/copper'})
 })