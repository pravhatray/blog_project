import { DELETE_POST_ERROR, DELETE_POST_LOADING, DELETE_POST_SUCCESS, GET_POST_ERROR, GET_POST_LOADING, GET_POST_SUCCESS, UPDATE_POST_ERROR, UPDATE_POST_LOADING, UPDATE_POST_SUCCESS } from "./Post.types"

const initialState={
    getposts:{
        loading:false,
        error:false
    },
    deletePost:{
        loading:false,
        error:false
    },
    updatepost:{
        loading:false,
        error:false
    },
    data:[]
}

export const postReducer=(state=initialState,{type,payload})=>{
    switch(type){
        case GET_POST_LOADING:{
            return{
                ...state,
                getposts:{
                    ...state.getposts,
                    loading:true
                }
                
            }
        }

        case GET_POST_ERROR:{
            return {
                ...state,
                getposts:{
                    ...state.getposts,
                    loading:false,
                    error:true
                }
            }
        }

        case GET_POST_SUCCESS :{
            return {
               ...state,
               getposts:{
                ...state.getposts,
                loading:false,
                error:false
               },
               data:[...payload]
            }
        }

            case UPDATE_POST_LOADING:{
                return {
                    ...state,
                    updatepost:{
                        ...state.updatepost,
                        loading: true,
                        error:false
                    }
                }
            }
        case UPDATE_POST_ERROR:{
            return {
                ...state,
                updatepost:{
                    ...state.updatepost,
                    loading:false,
                    error:true
                }
            }
        }
        case UPDATE_POST_SUCCESS:{
            return {
                ...state,
                updatepost:{
                    ...state.updatepost,
                    loading:false,
                    error:false
                }
            }
        }


        case DELETE_POST_LOADING : {
            return {
                ...state,
                deletePost:{
                    ...state.deletePost,
                    loading:true,
                    error:false
                }
            }
        }
        case DELETE_POST_ERROR : {
            return {
                ...state,
                deletePost:{
                    ...state.deletePost,
                    loading:false,
                    error:true
                }
            }
        }
        case DELETE_POST_SUCCESS: {
            return {
                ...state,
                deletePost:{
                    ...state.deletePost,
                    loading:false,
                    error:false
                }
            }
        }

        default:{
            return state
        }



    }
}




// case ADD_POST_LOADING: {
//     return {
//         ...state, addPosts: { ...state.addPosts, loading: true }
//     }
// }
// case ADD_POST_ERROR: {
//     return {
//         ...state, addPosts: { ...state.addPosts, loading: false, error: true }
//     }
// }
// case ADD_POST_SUCCESS: {
//     return {
//         ...state,
//         addPosts: { ...state.addPosts, loading: false, error: false },
//         data:[...state.data,payload]
//     }
    
// }