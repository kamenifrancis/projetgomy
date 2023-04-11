import {createSlice} from "@reduxjs/toolkit";


const movieSlice = createSlice({
name: 'movie', 
initialState:{
    
        titre:"update", 
         image:"redux",
        video:"redux",
         description:"redux",
         rate:10,
         date:"redux",
         personnage:"redux"
      
},
reducers: {
    setMovie:(state,action)=>{
        return action.payload
    }
}
}) 
export const {setMovie} = movieSlice.actions 
export default movieSlice.reducer