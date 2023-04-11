import {configureStore} from "@reduxjs/toolkit";
import AuthSlice from "./AuthSlice";
import movieSlice from "./movieSlice";
export default configureStore ({
    reducer : { 
        authUser: AuthSlice,
        movie:movieSlice
    }
})
