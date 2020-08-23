const mongoose= require('mongoose')

const prod=mongoose.model("Product",{
  productName:{
    type:String,
    required: true
  },
  // image: {type:String},
  description: {
    type:String,
    required: true
  },
  price: {
    type:Number,
    required: true
  }

})

module.exports=prod;