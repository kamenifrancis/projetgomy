const express = require('express')
const filmRoute= express.Router() 
const {getfilm,addfilm,updatedfilm,deletefilm} = require('../controlllers/Film')




filmRoute.get('/',getfilm )

filmRoute.post('/addfilm',addfilm )




 filmRoute.delete('/:id',deletefilm) 

  

     
filmRoute.put('/:id', updatedfilm ) 
    


module.exports=filmRoute