import { combineReducers } from "redux";
import { authReducer } from "./authReducer";
import { todoReducer } from "./todoReducer";
import { userReducer } from "./userReducer";

export const rootReducer = combineReducers({
    todos: todoReducer,
    user: userReducer,
    auth: authReducer
})