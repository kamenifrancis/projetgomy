const filmschema= require('../model/Film') 


exports.getfilm=async(req,res)=>{
    try{
        const film = await  filmschema.find()

        res.status(200).json({msg:'voici la liste des films',film}) 

    }catch(err){
        console.log(err)
    }
} 
exports.addfilm = async(req,res)=>{
    try{
        const Newfilm = new filmschema(req.body)
        
        await Newfilm.save() 
        console.log(Newfilm)
        res.status(200).json({Newfilm,msg:"you did it the film is added"})
          }catch(err) {
            console.log(err)
        res.status(500).json('could not add the film')
    }    
} 
exports.updatedfilm = async(req,res)=>{
    try{ 
        const {id} = req.params
        const updatedfilm = await filmschema.findByIdAndUpdate(id,{$set: {...req.body}})
        res.status(200).json({msg:'film updated', updatedfilm})
    }catch(err){
    console.log(err) 
}
}
exports.deletefilm = async(req,res)=>{
    try{
        const {id} = req.params
        const deletefilm = await filmschema.findByIdAndDelete(id) 
        res.status(200).json({msg:'you did it, welcome to the club'})
    }catch(err){
        console.log(err) 
    }
    }