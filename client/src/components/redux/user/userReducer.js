import {LOGIN_SUCCESS,REGISTER_SUCCESS,LOGOUT_SUCCESS,CONTACT_ERROR,USER_LOGGED} from './userType'
const initialUserState={
    userDetails:{},
    isAuthenticate:false,
    loading:true,
    error:''
}

const userReducer=(state=initialUserState,action)=>{
    switch(action.type){
        case REGISTER_SUCCESS:
        case LOGIN_SUCCESS:
            // alert(action.type)
            return{
                ...state,
                userDetails:action.payload,
                isAuthenticate:true,
                loading:false,
            }
        case USER_LOGGED:
            return{
                ...state,
                userDetails:action.payload,
                isAuthenticate:true,
                loading:false
            } 
        case CONTACT_ERROR:
        case LOGOUT_SUCCESS:
            // alert(action.type)
            return{
                ...state,
                userDetails:{},
                isAuthenticate:false,
                loading:false,
                error:action.paylod,
            }       
        default:
            return state;
    }
}
export default userReducer