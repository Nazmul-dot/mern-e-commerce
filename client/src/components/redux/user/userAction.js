import { LOGIN_SUCCESS, REGISTER_SUCCESS, LOGOUT_SUCCESS, CONTACT_ERROR, USER_LOGGED } from './userType'
import axios from 'axios'
export const userRegister = (regisData) => {
    // alert('regisData')
    return async dispatch => {
        try { 
            const result = await axios.post('/register', regisData)
            console.log(result)
            dispatch({
                type: REGISTER_SUCCESS,
                payload: result.data
            })
            alert('regis')
            localStorage.setItem('token', JSON.stringify(result.data.tokens))
        } catch (error) {
            dispatch({
                type: CONTACT_ERROR,
                payload: error.message
            })
        }

    }
}

export const userLogin = (logData) => {
    return async dispatch => {
        try {
            const result = await axios.post('/login', logData)
            dispatch({
                type: LOGIN_SUCCESS,
                payload: result.data
            })
            localStorage.setItem('token', JSON.stringify(result.data.tokens))

        } catch (error) {
            dispatch({
                type: CONTACT_ERROR,
                payload: error.message
            })
        }

    }
}

export const userLogout = () => {
    // alert("userLogout")
    return async dispatch => {
        try {

            await axios.get('/logout')
            localStorage.removeItem('token')
            // alert("Logout")
            dispatch({
                type: LOGOUT_SUCCESS
            })
        } catch (error) {

        }
    }
}
export const userlogged = () => {
    // alert('userlogged')
    return async dispatch => {
        try {
            const result = await axios.get('/userlogged');
            dispatch({
                type: USER_LOGGED,
                payload: result.data
            })
        } catch (error) {
            dispatch({
                type: CONTACT_ERROR,
                payload: error.message
            })
        }

    }
}