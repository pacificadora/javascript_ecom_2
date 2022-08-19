console.log("running")

var cart = document.getElementsByClassName('add-cart')
console.log(cart)

var products = [
{
	name: "Nike Air Force1",
	tag: "nikeairforce1",
	img_tag: "product_nike_1",
	price: 50,
	inCart: 0,
	pid: 1
},
{
	name: "Nike Air Force2",
	tag: "nikeairforce2",
	img_tag: "product_nike_21",
	price: 50,
	inCart: 0,
	pid: 2
},
{
	name: "Nike Air Force3",
	tag: "nikeairforce3",
	img_tag: "product_nike_31",
	price: 50,
	inCart: 0,
	pid: 3
},
{
	name: "Nike Air Force4",
	tag: "nikeairforce4",
	img_tag: "product_nike_41",
	price: 50,
	inCart: 0,
	pid: 4
},
{
	name: "Nike AirForce 5",
	tag: "nikeairforce5",
	img_tag: "product_nike_51",
	price: 50,
	inCart: 0,
	pid: 5
},
{
	name: "Nike AirForce 6",
	tag: "nikeairforce6",
	img_tag: "product_nike_61",
	price: 50,
	inCart: 0,
	pid: 6
},
{
	name: "Nike AirForce 7",
	tag: "nikeairforce7",
	img_tag: "product_nike_71",
	price: 50,
	inCart: 0,
	pid: 7
},
{
	name: "Nike AirForce 8",
	tag: "nikeairforce8",
	img_tag: "product_nike_81",
	price: 50,
	inCart: 0,
	pid: 8
},
{
	name: "Nike AirForce 9",
	tag: "nikeairforce9",
	img_tag: "product_nike_91",
	price: 50,
	inCart: 0,
	pid: 9
},
{
	name: "Nike AirForce 10",
	tag: "nikeairforce10",
	img_tag: "product_nike_101",
	price: 50,
	inCart: 0,
	pid: 10
},
{
	name: "Nike AirForce 11",
	tag: "nikeairforce11",
	img_tag: "product_nike_111",
	price: 50,
	inCart: 0,
	pid: 11
},
{
	name: "Nike AirForce 12",
	tag: "nikeairforce12",
	img_tag: "product_nike_121",
	price: 50,
	inCart: 0,
	pid: 12
},
{
	name: "Nike AirForce 13",
	tag: "nikeairforce13",
	img_tag: "product_nike_131",
	price: 50,
	inCart: 0,
	pid: 13
},
{
	name: "Nike AirForce 14",
	tag: "nikeairforce14",
	img_tag: "product_nike_141",
	price: 50,
	inCart: 0,
	pid: 14
},
{
	name: "Nike AirForce 15",
	tag: "nikeairforce15",
	img_tag: "product_nike_151",
	price: 50,
	inCart: 0,
	pid: 15
},
{
	name: "Nike AirForce 16",
	tag: "nikeairforce16",
	img_tag: "product_nike_4",
	price: 50,
	inCart: 0,
	pid: 16
},
{
	name: "Nike AirForce 17",
	tag: "nikeairforce17",
	img_tag: "product_nike_1",
	price: 50,
	inCart: 0,
	pid: 17
},
{
	name: "Nike AirForce 18",
	tag: "nikeairforce18",
	img_tag: "product_nike_2",
	price: 50,
	inCart: 0,
	pid: 18
},
{
	name: "Nike AirForce 19",
	tag: "nikeairforce19",
	img_tag: "product_nike_3",
	price: 50,
	inCart: 0,
	pid: 19
},
{
	name: "Nike Air Force 20",
	tag: "nikeairforce20",
	img_tag: "product_nike_4",
	price: 50,
	inCart: 0,
	pid: 20
}
]

for ( var i=0; i<cart.length; i++){
	cart[i].addEventListener('click', (e)=>{
		let id = e.target.getAttribute('id')
		console.log(id)
		cartNumbers(products[id])
		totalCost(products[id])
	})
}


function cartNumbers(product){
	var productNumbers = localStorage.getItem('cartNumbers')
	productNumbers = parseInt(productNumbers);
	
	if (productNumbers){
		localStorage.setItem('cartNumbers', productNumbers+1)
	}
	else{
		localStorage.setItem('cartNumbers', 1)
	}
	
	setItems(product)
}


function setItems(product){
	let cartItems = localStorage.getItem("productsInCart")
	cartItems = JSON.parse(cartItems)
	
	if (cartItems != null){
		if (cartItems[product.tag] == undefined){
			cartItems = {
				...cartItems,
				[product.tag]:product
			}
		}
		cartItems[product.tag].inCart += 1
	}else{
		product.inCart = 1
		cartItems = {
			[product.tag]: product
		}
	}
	localStorage.setItem("productsInCart", JSON.stringify(cartItems))
}


function totalCost(product){
	//console.log("the product price is", product.price)
	let cartCost = localStorage.getItem("totalCost")
	
	if (cartCost != null) {
		cartCost = parseInt(cartCost)
		localStorage.setItem("totalCost", cartCost + product.price)
	}else{
		localStorage.setItem("totalCost", product.price)
	}
}

displayCart();

function displayCart(){
	let cartCost = localStorage.getItem("totalCost")
	let cartItems = localStorage.getItem("productsInCart")
	cartItems = JSON.parse(cartItems)
	console.log(cartItems)
	let productContainer = document.querySelector(".products")
	if (cartItems && productContainer){
		productContainer.innerHTML = '';
		//looping
		Object.values(cartItems).map(item => {
			productContainer.innerHTML += `
			<div class = "product">
				<img src="./img/${item.img_tag}.jpg">
				<span>${item.name}</span>
				<span class="rem">Remove</span>
				<span class="price">${item.price}</span>
				<div class="quantity">${item.inCart}</div>
				<div class="total">${item.inCart*item.price}</div>
			</div>
			
			`;
		})
		
		productContainer.innerHTML += `
		<div class="basketTotalCart">
			<h4 class="basketTotalTitle">
				Basket Total
			</h4>
			
			<h4 class="basketTotal">
				${cartCost}
		`;
		console.log('running')
	}
}




// functions for removing the items.
let removecartitembuttons = document.getElementsByClassName("rem")
console.log(removecartitembuttons)
for (let i=0; i<removecartitembuttons.length; i++){
	console.log(removecartitembuttons[i].nextElementSibling.innerText)
	console.log(removecartitembuttons[i].nextElementSibling.nextElementSibling.innerText)
}



for  (let i=0; i<removecartitembuttons.length; i++){
	button = removecartitembuttons[i]
	buttonprice = removecartitembuttons[i].nextElementSibling.innerText
	buttonQuantity = removecartitembuttons[i].nextElementSibling.nextElementSibling.innerText
	totalButtonPrice = buttonprice * buttonQuantity
	console.log(totalButtonPrice)
	button.addEventListener("click", function(e){
		console.log("clicked")
		console.log(e.target)
		let buttonClicked = e.target
		keyword = e.target.getAttribute('class')
		console.log(keyword)
		buttonClicked.parentElement.remove()
		updateCartCost(totalButtonPrice)
		updateCartNumber(buttonQuantity)
		updateProductsInCart(keyword)
		displayCart()
	})
}

function updateCartCost(price){
	let cartCost = localStorage.getItem("totalCost")
	if (cartCost != null) {
		cartCost = parseInt(cartCost)
		localStorage.setItem("totalCost", cartCost - price)
	}else{
		localStorage.setItem("totalCost", 0)
	}
}

function updateCartNumber(quantity){
	var productNumbers = localStorage.getItem('cartNumbers')
	productNumbers = parseInt(productNumbers);
	if (productNumbers){
		localStorage.setItem('cartNumbers', productNumbers - quantity)
	}
	else{
		localStorage.setItem('cartNumbers', 0)
	}
	
}

function updateProductsInCart(keyword){
	let cartItems = localStorage.getItem("productsInCart")
	cartItems = JSON.parse(cartItems)
	
	if (cartItems != Null){
		localstorage.removeItem(keyword)
	}
}
 




















