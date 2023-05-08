import axios from 'axios' 
export const fetchComment = async()=>{
    const {data} = await axios.get('http://localhost:4000/comment/getcomment/:id')
    return data 
} 
export const postComment = async(values)=>{
    const addingComment = await axios.post('http://localhost:4000/comment/addcomment' , {...values})
}

export const updateComment = async(id,values)=>{
    const updated = await axios.put( `http://localhost:4000/comment/updatecomment/:id/${id}`, {...values})
}
export const deleteComment = async(id)=>{
    const deletedComment = await axios.delete( `http://localhost:4000/comment/${id}`)
}
export const getUniqueComment = async(id,values)=>{
    const {data} = await axios.get( `http://localhost:4000/comment/getcomment/:id/${id}`, {...values})
    return data 
} 
export const likeComment = async(id,values)=>{
    const likecomment = await axios.put( `http://localhost:4000/comment/likecomment/:id/${id}`, {...values})
       } 

       export const replyComment = async(values)=>{
        const replyComment = await axios.post('http://localhost:4000/comment/replycomment' , {...values})
    }