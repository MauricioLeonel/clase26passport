const rutas = require('express').Router()
const {faker} = require('@faker-js/faker')

rutas.get('/api/productos-test',(req,res)=>{
	const productos = []
	for(var i = 0; i < 5; i++){
		const result = {
			nombre:faker.commerce.product(),
			precio:faker.commerce.price(),
			foto:faker.image.technics()
		}
		productos.push(result)
	}
	res.send(productos)
})
module.exports = rutas