const mongoose = require('mongoose')

const connectdb=async()=>{
try{
//    await  mongoose.connect('mongodb+srv://blickson57:va7BPxZFcmSJcBNH@cluster0.cmxtx01.mongodb.net/?retryWrites=true&w=majority')
console.log('you are connected to the db ')
}catch(err){
    console.log(err)
}
}

module.exports=connectdb