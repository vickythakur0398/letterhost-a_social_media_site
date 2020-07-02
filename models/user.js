//here we are kaing signup info to mongoose acquire is must
const mongoose = require('mongoose');
const { text } = require('express');

// now we have to set the schema jisme ki vo store ho 

const userSchema = new mongoose.Schema ({
    email:{
        //here we want ki har user ki gmail id unique ho 
        type: String,
        // or must h dalna
        required:true,
        //or unique ho
        unique:true
    },

    password:{
        type:text,
        required:true
    },

    name:{
        type:String,
        required:true
    }
    }, {


    //now we also wantto know that ki user ne kab create kia tha to created app or agar user ne name change kia ytyta kuch bhi to update bhi hoye to uske lie mongodb tc karta h using this
    timestamps:true

});

//telling mongoose this is a schema 
const User = mongoose.model(`User`, userSchema);

//now we have to export this 
module.exports = User;