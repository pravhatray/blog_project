import { legacy_createStore,combineReducers,compose,applyMiddleware } from "redux"
import thunk from "redux-thunk"
import { authReducer } from "./auth/Auth.reducer"

const rootReducer=combineReducers({
    auth:authReducer
})

export const store=legacy_createStore(rootReducer,applyMiddleware(thunk))