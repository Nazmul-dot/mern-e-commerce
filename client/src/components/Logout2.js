import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { userLogout } from './redux/user/userAction'
import { clearCartLogout } from './redux/product/prdkAction'
import { useHistory } from 'react-router'
const Logout = () => {
    const { isAuthenticate } = useSelector(state => state.userData)
    const dispatch = useDispatch();
    const history = useHistory()
    useEffect(() => {
        // alert('log')
        dispatch(userLogout())
    }, [])
    useEffect(() => {
        if (!isAuthenticate) {
            dispatch(clearCartLogout())
            history.push('/login')
        }
    }, [isAuthenticate])
    return (
        <>
            logout2
        </>
    )
}

export default Logout