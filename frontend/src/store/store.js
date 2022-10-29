import { legacy_createStore,combineReducers,compose,applyMiddleware } from "redux"
import thunk from "redux-thunk"
import { authReducer } from "./auth/Auth.reducer"
import { postReducer } from "./post/Post.reducer"

const rootReducer=combineReducers({
    auth:authReducer,
    post:postReducer
})

export const store=legacy_createStore(rootReducer,applyMiddleware(thunk))