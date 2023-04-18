//import express

const express = require('express')
//Router()
const router =  new express.Router()
//import controller
const controller = require('../controllers/productController')
//import wishlist controller
const wishlistcontroller =require('../controllers/wishlistController')
//cartController import
const cartController =require('../controllers/cartController')

//get-all-products api
//router.http-request(path,callback to define logic to resolve api)
router.get('/products/get-all-products',controller.getallproducts)
//router view single products details
router.get('/products/:id',controller.viewProduct)
//route for add to wishlist
router.post('/products/add-to-wishlist',wishlistcontroller.addToWhilist)
//routes for get all wishlist item
router.get('/wishlist/get-all-items',wishlistcontroller.getAllWishlistItem)
//route for removing an item from whishlist
router.delete('/wishlist/remove-item/:id',wishlistcontroller.removeWishlistItem)
//route for adding item to cart
router.post('/products/add-to-cart',cartController.addToCart)
// routes for get all cart items
router.get('/cart/get-all-items',cartController.getCartItems)
// route for remove item from cart
router.delete('/cart/item/:id',cartController.removeCartItem)
// route for incrementing cart item quantity
router.get('/cart/increment-item/:id',cartController.incrCartItem)
// route decrement
router.get('/cart/decrement-item/:id',cartController.decrCartItem)
// router for empty cart
router.delete('/cart/empty-cart',cartController.emptyCart)



//export router
module.exports = router