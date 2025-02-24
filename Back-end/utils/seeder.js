const products = require('../data/product.json');
const product = require('../Models/productModel');
const dotenv = require('dotenv');
const connectDatabase = require('../Config/database')

dotenv.config({path:'Back-end/config/config.env'});
connectDatabase();

const seedProducts = async ()=>{
    try{

   await product.deleteMany();
    console.log('product deleted !')
   await product.insertMany(products);
   console.log('all products is added !')
    } catch(error){
        console.log(error.message);
    } 
    process.exit();
}

seedProducts()