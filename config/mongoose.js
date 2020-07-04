//here we  are stting our database first step is to install it

const mongoose = require('mongoose');

//and now we are providing connection with the database in enviroment which is our device
mongoose.connect(`mongodb://localhost/letterhost_develeopemnt`);


// here we are connecting 
const db = mongoose.connection


// whenever there is error than or not than
db.on(`error`, console.error.bind(console, `error in connecting to mongodb`));

db.once(`open`, function(){
    console.log(`connected to database:: mongodb`)
})


// this is exporting it after doing this we have to acquire this in main index.js
module.exports = db;

