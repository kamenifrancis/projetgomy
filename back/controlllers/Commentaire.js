const commentschema= require('../model/Commentaire') 
exports.getcomment=async(req,res)=>{
    try{
        const comment = await  commentschema.find()

        res.status(200).json({msg:'voici la liste des commentaires',comment}) 

    }catch(err){
        console.log(err)
    }
} 
exports.addcomment = async(req,res)=>{
    try{
        const Newcomment = new commentschema(req.body)
        
        await Newcomment.save() 
        console.log(Newcomment)
        res.status(200).json({Newcomment,msg:"you did it the comment is added"})
          }catch(err) {
            console.log(err)
        res.status(500).json('could not add the comment')
    }    
} 
exports.updatedcomment = async(req,res)=>{
    try{ 
        const {id} = req.params
        const updatedcomment = await commentschema.findByIdAndUpdate(id,{$set: {...req.body}})
        res.status(200).json({msg:'comment updated', updatedcomment})
    }catch(err){
    console.log(err) 
}
}
exports.deletecomment = async(req,res)=>{
    try{
        const {id} = req.params
        const deletecomment = await commentschema.findByIdAndDelete(id) 
        res.status(200).json({msg:'you did it, welcome to the club'})
    }catch(err){
        console.log(err) 
    }
    }
    exports.likecomment = async(req,res)=>{
        try{
            const {id} = req.params
            const likecomment = await commentschema.findByIdAndLike(id) 
            res.status(200).json({msg:'you did it, welcome to the club'})
        }catch(err){
            console.log(err) 
        }
        } 
        exports.replycomment = async(req,res)=>{
            try{
                const {id} = req.params
                const replycomment = await commentschema.findByIdAndReply(id) 
                res.status(200).json({msg:'you did it, welcome to the club'})
            }catch(err){
                console.log(err) 
            }
            } 
        

