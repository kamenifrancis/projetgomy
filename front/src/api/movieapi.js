import axios from 'axios' 
export const fetchFilm = async()=>{
    const {data} = await axios.get('http://localhost:4000/movie/getfilm/:id')
    return data 
} 
export const postFilm = async(values)=>{
    const addingFilm = await axios.post('http://localhost:4000/movie/addfilm' , {...values})
}

export const updateFilm = async(id,values)=>{
    const updated = await axios.put( `http://localhost:4000/movie/updatefilm/:id/${id}`, {...values})
}
export const deleteFilm = async(id)=>{
    const deletedFilm = await axios.delete( `http://localhost:4000/movie/deletefilm/${id}`)
}
export const getUniqueFilm = async(id,values)=>{
    const {data} = await axios.get( `http://localhost:4000/movie/getfilm/:id/${id}`, {...values})
    return data 
}