const mongoose = require('mongoose');
// connect mongoDB

mongoose.connect('mongodb+srv://tango:admin1@project0.auso3.mongodb.net/eComemrce?retryWrites=true&w=majority').then(()=>{
  console.log('connected to mongoose');
})
.catch((err)=>{
  console.log(err);
})