const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    name : {
        type : String,
        required : [true, "Please enter Product Name"],
        trim : true,
        maxLength : [100, "product cannot exceed 100 character"]
    },

    price : {
        type : Number,
        required : true,
        default : 0.0
    },

    description :{
        type: String,
        required : [true , "please enter description"]
    },
    
    ratings: {
        type : String,
        default : 0
    },

    images : [
        {
            image : {
                type : String,
                required : true
            }
        }
    ],

    category : {
        type :String,
        required : [true, "Please the product Category"],
        enum : {
            values :[
                'Electronics',
                'Mobile Phones',
                'Laptops',
                'Accessories',
                'Headphones',
                'food',
                'Books',
                'Clothes/Shoes',
                'Beauty/Health',
                'Sports',
                'Outdoor',
                'Home'

        ],
        message : "please select the product category"
    }

},
    seller : {
        type : String,
        required : [true ,"please enter the product seller"]
    } ,

    stock : {
        type : Number,
        required : [true, "please enter product stock"],
        maxLength : [20, "product stock cannot be exceed 20"]
    },

    numOfReviews:{
         type : Number,
         default : 0
    },

    reviews : [
        {   user:{
            type:mongoose.Schema.Types.ObjectId,
            ref: 'User'
        },

            rating : {
                type : String,
                required : true
            },
            comment : {
                type : String,
                required : true
            }
        }

    ],

    user : {
            type: mongoose.Schema.Types.ObjectId
    },

     createdAt : {
            type : Date,
            default : Date.now()
     }
    
})

let Schema = mongoose.model('product', productSchema)

module.exports = Schema