const mongoose = require('mongoose')

const commentschema = mongoose.Schema({
    commentaire:String, 
 
    }
   

) 
module.exports= mongoose.model('commentschema',commentschema)