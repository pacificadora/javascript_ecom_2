var products = [
{
	name: "Nike Air Force1",
	tag: "nikeairforce1",
	img_tag: "product_nike_1",
	price: 50,
	inCart: 0
},
{
	name: "Nike Air Force2",
	tag: "nikeairforce2",
	img_tag: "product_nike_21",
	price: 50,
	inCart: 0
},
{
	name: "Nike Air Force3",
	tag: "nikeairforce3",
	img_tag: "product_nike_31",
	price: 50,
	inCart: 0
},
{
	name: "Nike Air Force4",
	tag: "nikeairforce4",
	img_tag: "product_nike_41",
	price: 50,
	inCart: 0
},
{
	name: "Nike AirForce 5",
	tag: "nikeairforce5",
	img_tag: "product_nike_51",
	price: 50,
	inCart: 0
},
{
	name: "Nike AirForce 6",
	tag: "nikeairforce6",
	img_tag: "product_nike_61",
	price: 50,
	inCart: 0
},
{
	name: "Nike AirForce 7",
	tag: "nikeairforce7",
	img_tag: "product_nike_71",
	price: 50,
	inCart: 0
},
{
	name: "Nike AirForce 8",
	tag: "nikeairforce8",
	img_tag: "product_nike_81",
	price: 50,
	inCart: 0
},
{
	name: "Nike AirForce 9",
	tag: "nikeairforce9",
	img_tag: "product_nike_91",
	price: 50,
	inCart: 0
},
{
	name: "Nike AirForce 10",
	tag: "nikeairforce10",
	img_tag: "product_nike_101",
	price: 50,
	inCart: 0
},
{
	name: "Nike AirForce 11",
	tag: "nikeairforce11",
	img_tag: "product_nike_111",
	price: 50,
	inCart: 0
},
{
	name: "Nike AirForce 12",
	tag: "nikeairforce12",
	img_tag: "product_nike_121",
	price: 50,
	inCart: 0
},
{
	name: "Nike AirForce 13",
	tag: "nikeairforce13",
	img_tag: "product_nike_131",
	price: 50,
	inCart: 0
},
{
	name: "Nike AirForce 14",
	tag: "nikeairforce14",
	img_tag: "product_nike_141",
	price: 50,
	inCart: 0
},
{
	name: "Nike AirForce 15",
	tag: "nikeairforce15",
	img_tag: "product_nike_151",
	price: 50,
	inCart: 0
},
{
	name: "Nike AirForce 16",
	tag: "nikeairforce16",
	img_tag: "product_nike_4",
	price: 50,
	inCart: 0
},
{
	name: "Nike AirForce 17",
	tag: "nikeairforce17",
	img_tag: "product_nike_1",
	price: 50,
	inCart: 0
},
{
	name: "Nike AirForce 18",
	tag: "nikeairforce18",
	img_tag: "product_nike_2",
	price: 50,
	inCart: 0
},{
	name: "Nike AirForce 19",
	tag: "nikeairforce19",
	img_tag: "product_nike_3",
	price: 50,
	inCart: 0
},
{
	name: "Nike Air Force 20",
	tag: "nikeairforce20",
	img_tag: "product_nike_4",
	price: 50,
	inCart: 0
}
]

let searchbar = document.getElementById("search")
console.log(search)

searchbar.addEventListener("keyup", (e)=>{
	console.log(e.target.value)
	let searchstring = e.target.value.toLowerCase()
	let filterchar = products.filter((character)=>{
		return (character.name.toLowerCase().includes(searchstring) || character.tag.toLowerCase().includes(searchstring))
	})
	console.log(filterchar)
})















