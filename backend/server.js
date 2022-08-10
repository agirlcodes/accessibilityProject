const express = require('express');
const cors = require('cors');
const app = express();
const mongoose = require('mongoose');
const port = process.env.PORT || 3000;
app.use(express.static('frontend'))
app.use('/styles', express.static('styles'))
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
})
