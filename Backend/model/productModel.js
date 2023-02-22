const mongoose = require("mongoose")
const productSchema = mongoose.Schema({
   name:String,
   image:String,
   category:String,
   description:String,
   price:Number,
   delivery_In:Number
})
const productModel = mongoose.model("post",productSchema)
module.exports = {productModel}