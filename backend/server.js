const express = require('express');
const cors = require('cors');
const app = express();
const path = require('path');
const mongoose = require('mongoose');
// const Products = require('./models/products')
// Server set-up
// const port = 3000;
const port = process.env.PORT || 3000;
app.use(express.static('public'))
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.listen(port, (error) => {
  console.log(port)
  if(error){
  console.log(error)
  }else{
    console.log(`Server running on port ${port}`);
  }
});
const url = 'mongodb+srv://tango:admin1@project0.auso3.mongodb.net/eCommerce?retryWrites=true&w=majority'
// Database connection
mongoose.connect(url).then(()=>{
  console.log('connected to mongoose');
})
.catch((err)=>{
  console.log(err);
});

// HTTP ENDPOINTS
app.get('/getData', (req,res)=>{
  mongoose.connect(url, function(err, db) {
    if (err) throw err;
    db.collection("products").find({}).toArray(function(err, result) {
      if (err) throw err;
      res.send(result);
    });
  });
})

app.get("/", (req,res)=>{
  res.send("i am base")
  // res.sendFile(path.join(_dirname, '../index.html'))
})

// app.post ('/insert', function(req,res,next) {
//   // console.log(req)
//   // let newData = {
//   //   name: req.body.name,
//   //   img: req.body.img,
//   //   price: req.body.price
//   // }
//   // mongoose.connect(url, function (err, db) {
//   //     db.collection('products')
//   //     .insertOne({"category":"TopSellers", newData}, function (err, result) {
//   //         // console.log(newData)
//   //         console.log('item has been inserted');
//   //     });
//   // });
// });