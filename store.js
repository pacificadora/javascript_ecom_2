let removecartitembuttons = document.getElementsByClassName("rem")
console.log(removecartitembuttons)


for  (let i=0; i<removecartitembuttons.length; i++){
	let button = removecartitembuttons[i]
	button.addEventListener("click", function(e){
		console.log("clicked")
		console.log(e)
		let buttonClicked = e.target
		buttonClicked.parentElement.parentElement.parentElement.parentElement.remove()
		updateTotalCart()
	})
}

function updateTotalCart(){
	let cartContainer = document.getElementsByClassName("tab")
	console.log(cartContainer)
	let cartrows = document.getElementsByClassName("cart-row")
	console.log(cartrows)
}