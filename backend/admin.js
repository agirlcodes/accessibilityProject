const mongoose = require('mongoose');
const server = 'mongodb://localhost:3001'
const database = 'myDatabase';
mongoose.connect(`${server}/${database}`,
   { useNewUrlParser: true, useUnifiedTopology: true }
).then(() => {
   console.log("Successfully connect to MongoDB.");
})
   .catch(err => {
      console.error("Connection error", err);
      process.exit();
   });