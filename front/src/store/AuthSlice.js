import {createSlice} from "@reduxjs/toolkit";


const AuthSlice = createSlice({
name: 'authUser', 
initialState:{
    name: "francis slice" ,
    email: "francisslice@mail.com",
    password: "Azertyaa" ,
    role: "admin"
},
reducers: {
    setAuth:(state,action)=>{
        return action.payload
    }
}
}) 
export const {setAuth} = AuthSlice.actions 
export default AuthSlice.reducer