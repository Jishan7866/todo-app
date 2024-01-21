const initialState = {
    isAuthenticated:false,
    user:null,
};
const authReducers = (state=initialState,action)=>{
switch(action.type){
    case 'Login':
        return{
            ...state,
            isAuthenticated:true,
            user:action.payload,
        };
    default:
        return state;
}
}
export default authReducers;