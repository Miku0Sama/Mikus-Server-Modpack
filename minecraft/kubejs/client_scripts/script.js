// priority: 0

console.info('Hello, World! (You will see this line every time client resources reload)')

onEvent('rei.hide.items', event => {
	// Hide items in JEI here
	// event.hide('minecraft:cobblestone')
	event.hide(Item.of('chiselsandbits:block_bit').ignoreNBT())
})