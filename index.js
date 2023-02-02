const mongoose=require('mongoose');
const url='mongodb://localhost:27017/e-comm';

const main=async ()=>{
    await mongoose.connect(url);
    const productSchema=new mongoose.Schema({
        item:String,
        brand:String
    });
    const productModel=mongoose.model('products',productSchema);
    const data=new productModel({item:'S-20',brand:'Samsung'});
    const result=await data.save();
    console.log(result);

}

main();