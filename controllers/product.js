const express=require('express')
const route=express.Router();
//this module need mongoose created module
const Product=require('../models/product');

const Id=require('mongoose').Types.ObjectId;

//get all items
route.get('/api',function(req,res){
  Product.find(function(err,items){
    if(!err){
      res.send(items);
    }else{
      res.send("Error occured while fetching Data")
    }
  });
});

//get product by id
route.get('/api/:id',function(req,res){
  if(!Id.isValid(req.params.id)){
    res.status(400).send("wrong or bad id..")
     }

  Product.findById(req.params.id,function(err,prod){
    if(!err){
      res.send(prod);
    }else{
      res.send("Error occured")
    }
  })

});

//add new product to product collection
route.post('/api',function(req,res){
  var prod=new Product({
    productName:req.body.productName,
    description: req.body.description,
    price: req.body.price
  });
  //save new product
  console.log(prod.price);
  prod.save(function(err,item){
    if(!err){
      res.send("Saved successfully")
    }else{
      req.send("Error occured item never saved")
    }
  })
})

//update product by id
route.put('/item/:id',function(req,res){
  if(!Id.isValid(req.params.id)){
    res.status(400).send("wrong or bad id..")
  }
  Product.findByIdAndUpdate(req.params.id,function(err,item){
    if(!err){
      req.save(item).then(Product.findOne(req.params.id,function(err,prod){
        if(!err){
          res.send(prod)
        }else{
          res.send("Error")
        }
      }))
    }else{
      res.send("Error while updating the record")
    }
  })

})

// delete item by id using findOneAndRemove
route.delete('/api/:id',function(req,res){
  if(!Id.isValid(req.params.id)){
    res.status(400).send("wrong or bad id..")
  }

    Product.findOneAndRemove(req.params.id,function(err,prod){
    if(!err){
      res.send({method: 'DELETED was excuted successfully'})
    }else{
      res.send("Error occured.Item was never deleted")
    }
  })
});

module.exports=route;