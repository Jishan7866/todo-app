import { combineReducers } from "redux";
import authReducers from './authReducer';
const LoginReducers = combineReducers({
    auth:authReducers,
})
export default LoginReducers;