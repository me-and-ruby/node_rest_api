const mongoose=require('mongoose')

mongoose.connect('mongodb://localhost:27017/product', function(err){
  if(!err){
    console.log('Connection was successful to mongoDB >>>>>>>')
  }else{
    console.log("Error occured while connecting to DB <<<<<<<")
  }
});

module.exports=mongoose;