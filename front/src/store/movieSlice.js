import {createSlice} from "@reduxjs/toolkit";


const movieSlice = createSlice({
name: 'movie', 
initialState: [{
    
        titre:"", 
         image:"",
        video:"",
         description:"",
         rate:"",
         date:"",
         personnage:""
      
}],
reducers: {
    setMovie:(state,action)=>{
        return action.payload
    }
}
}) 
export const {setMovie} = movieSlice.actions 
export default movieSlice.reducer