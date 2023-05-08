const mongoose = require('mongoose')

const filmschema = mongoose.Schema({
   titre:String, 
   image:String,
   video:String,
   description:String,
   rate:Number,
   date:String,
   personnage:String
    }
   

) 
module.exports= mongoose.model('filmschema',filmschema)