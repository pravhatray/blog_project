import axios from "axios"
import { DELETE_POST_ERROR, DELETE_POST_LOADING, DELETE_POST_SUCCESS, GET_POST_ERROR, GET_POST_LOADING, GET_POST_SUCCESS, UPDATE_POST_ERROR, UPDATE_POST_LOADING, UPDATE_POST_SUCCESS } from "./Post.types"


const token = JSON.parse(localStorage.getItem("token")) || ""


// get  authors all post

export const getAuthorsPost=(id)=>async(dispatch)=>{

    dispatch({type:GET_POST_LOADING})
    try{
        const res= await axios.get(`http://localhost:8080/posts/${id}`,{
            headers:{
                authorization:token.token
            }
        })
        dispatch({type:GET_POST_SUCCESS,payload:res.data})
        return res.data
    }catch(er){
        dispatch({type:GET_POST_ERROR})
    }


}


// update authors post

export const updateAuthorsPost=(id,userId,data)=>async(dispatch)=>{
    dispatch({type:UPDATE_POST_LOADING})

    try{
        const res=await axios.patch(`http://localhost:8080/posts/${id}`,data,{
            headers: {
                authorization: token.token,
                unique: userId
            }
        })
        dispatch({type:UPDATE_POST_SUCCESS,payload:res.data})
        dispatch(getAuthorsPost(userId))
    }catch(er){
        dispatch({type:UPDATE_POST_ERROR})
    }
}

//  delete an authors post

export const deleteAuthorsPost=(id,userId)=>async(dispatch)=>{
    dispatch({type:DELETE_POST_LOADING})
    try{

        const res=await axios.delete(`http://localhost:8080/posts/${id}`,{
            headers: {
                authorization: token.token,
                unique: userId
            }
        })

        dispatch({type:DELETE_POST_SUCCESS,payload:res.data})
        dispatch(getAuthorsPost(userId))
    }catch(er){
        dispatch({type:DELETE_POST_ERROR})
    }
}




// export const AddPostData = (data) => async (dispatch) => {
//     dispatch({ type: ADD_POST_LOADING });

//     try {
//         const res = await axios.post("http://localhost:8080/posts", data, {
//             headers: {
//                 authorization: token.token,
//             }
//         })
//         dispatch({ type: ADD_POST_SUCCESS, payload: res.data });

//     } catch (er) {
//         dispatch({ type: ADD_POST_ERROR })
//     }
// }