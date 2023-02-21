const mongoose=require('mongoose');
const productSchema=new mongoose.Schema({
    item:String,
    brand:String,
    price:Number,
    category:String
});
module.exports=mongoose.model('products',productSchema);