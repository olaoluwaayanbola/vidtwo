const AuthReducer = (state, action) =>{
    switch(action.type){
        case "LOGIN":{
            return{
                currentUser:action.payload
            }
        }
        case "LOGIN":{
            return{
                currentUser:null,
            }
        }
        default:
            return state;
    }
}
export default AuthReducer