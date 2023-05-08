const express = require('express')
const commentRoute= express.Router() 
const {getcomment,addcomment,updatedcomment,deletecomment,likecomment,replycomment} = require('../controlllers/Commentaire')




commentRoute.get('/getcomment/:id',getcomment )

commentRoute.post('/addcomment',addcomment )

 


 
commentRoute.delete('/:id',deletecomment)

  

     
commentRoute.put('updatecomment/:id', updatedcomment ) 
    
commentRoute.put('likecomment/:id', likecomment )
commentRoute.post('replycomment',replycomment )

module.exports=commentRoute