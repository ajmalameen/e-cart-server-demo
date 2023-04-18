//import wishlist collection/model
const wishlists = require('../models/wishlistSchema')

//logic to add item to whislist
exports.addToWhilist = async (req,res)=>{
    //get product details from req body
    //destructuring
    const {id,title,price,image } = req.body
    //check product is already in wishlist
  try { 
    const item = await wishlists.findOne({id})
    //check product is already in whislist
    if(item){
    res.status(401).json("Item already present in your wishlist")
}else{
    //product is  not available,so add it
    const newProduct = new wishlists({
        id,title,price,image
    })
    //save to db
    await newProduct.save()
    res.status(200).json("Item added to your wishlist")


}
  }
catch(error){
    res.status(401).json(error)
}
}

//get all items in wishlist
exports.getAllWishlistItem  = async (req,res)=>{
  //logic
  try{
      //to get all items from an collection

    const allItem = await wishlists.find()
    if(allItem){
      res.status(200).json(allItem)

    }else{
      res.status(401).json('Your whishlist is empty')

    }

  }catch(error){
       res.status(401).json(error)
  }
}

//remove item from wishlist
exports.removeWishlistItem = async (req,res)=>{
   //logic
   //get product id from req url
   const {id} = req.params
   //check id is in collection
   try{
    const item = await wishlists.deleteOne({id})
    if(item){
      //get remaining items other than deleted one
      const allItems = await wishlists.find()
      res.status(200).json(allItems)

    }else{
      res.status(401).json("item is not in the wishlist")
    }
   }
   catch(error){

    res.status(401).json(error)

   }
}