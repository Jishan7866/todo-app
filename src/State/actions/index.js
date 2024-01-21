export const login =(email,password)=>{
    return(dispatch)=>{
        dispatch(
            {
                type:"Login",
                payload:{email,password}
            }
        )
    }
}