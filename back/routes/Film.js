const express = require('express')
const filmRoute= express.Router() 
const {getfilm,addfilm,updatedfilm,deletefilm} = require('../controlllers/Film')




filmRoute.get('/getfilm/:id',getfilm )

filmRoute.post('/addfilm',addfilm )

 


 filmRoute.delete('deletefilm/:id', async(req,res)=>{
    try{
        const {id}=req.params
        const deletefilm = await filmSchema.findByIdAndDelete(id)
        res.status(200).json( { message:'you delete file'} )
}catch(err){
    console.log(err)
}
 }
 )

  

     
filmRoute.put('updatefilm/:id', updatedfilm ) 
    


module.exports=filmRoute