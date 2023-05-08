import {configureStore} from "@reduxjs/toolkit";
import AuthSlice from "./AuthSlice";
import movieSlice from "./movieSlice";
import CommentSlice from "./CommentSlice";
export default configureStore ({
    reducer : { 
        authUser: AuthSlice,
        movie:movieSlice,
        comment:CommentSlice
    }
})
