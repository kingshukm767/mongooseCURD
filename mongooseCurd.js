const { Int32 } = require('mongodb');
const mongoose=require('mongoose');
const url='mongodb://localhost:27017/e-comm';
mongoose.connect(url);
const productSchema=new mongoose.Schema({
        item:String,
        brand:String,
        price:Number
});
// Save Function
const saveInDB=async ()=>{
    const productModel=mongoose.model('products',productSchema);
    const data=new productModel({item:'S-20',brand:'Samsung'});
    const result=await data.save();
    console.log(result);
}
//saveInDB(); //Enable function to save data 
//Update Function
const updateInDB=async ()=>{
    const product=mongoose.model('products',productSchema);
    const data=await product.updateOne(
        {item:'S-20'}, {$set:{price:52000,brand:'Samsung'}}
    );
    console.log(data);
}
//updateInDB(); //Enable function to update data 
const deleteInDB=async ()=>{
    const product=mongoose.model('products',productSchema);
    const data=await product.deleteOne({item:'S-20'});
    console.log(data);
}
//deleteInDB(); //Enable function to delete data 
const findInDB=async ()=>{
    const product=mongoose.model('products',productSchema);
    const data=await product.find({item:'S-20'});
    console.log(data);
}
findInDB();