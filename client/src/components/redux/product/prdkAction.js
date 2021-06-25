import axios from 'axios'
import { FaAlignJustify } from 'react-icons/fa'
import {
    GET_PRODUCT, GET_STORAGE_CART, SET_TOTAL, ERROR_PRODUCT,
    CLEAR_CART_LOGOUT, SINGLE_PRODUCT_SET, SINGLE_PRODUCT_GET, FILTER, SORT, CLEAR,
    ADD_TO_CART, DECREMENT, REMOVE, CREATE_PRODUCT, CLEAR_SHOW_DATA,
    DELETE_PRODUCT, SELECT_PRODUCT, UPDATE_PRODUCT, SENT_PAYMENT, GET_PAYMENT,
    SINGLE_USER_ALL_PAYMENT, SET_SINGLE_PAYMENT_CART, SET_PER_USER_PAYMENT_DATA, GET_PER_USER_PAYMENT_DATA,
    GET_SINGLE_PAYMENT_CART, LOGOUT_CLEAR
} from './prdkType'

// get all product from database
export const getAllproduct = () => {
    return async dispatch => {
        try {
            const result = await axios.get('/getproduct')
            dispatch({ type: GET_PRODUCT, payload: result.data })
        } catch (error) {
            dispatch({ type: ERROR_PRODUCT, payload: error.message })
        }

    }
}
//get cart that add to cart
export const getCart = () => {
    return async dispatch => {
        try {
            const result = await axios.get('/getcart')
            dispatch({ type: GET_STORAGE_CART, payload: result.data })
            dispatch({ type: SET_TOTAL })
        } catch (error) {
            dispatch({ type: ERROR_PRODUCT, payload: error.message })
        }

    }
}

//add to cart 
export const addTocart = (data) => {
    return async dispatch => {
        var { id, storeproducts, cart } = data
        var temproduct = storeproducts;
        var temcart = cart;
        var item = temcart.find((item) => item._id === id)
        if (!item) {
            item = temproduct.find((item) => item._id === id)
            temcart = [...temcart, item]
        } else {
            item.count++;
            item.total = item.price * item.count;
        }
        cart = temcart
        dispatch({ type: ADD_TO_CART, payload: cart })
        dispatch({ type: SET_TOTAL })
        await axios.post('/setcart', cart)

    }
}

//set single product view
export const setSingleProduct = (product) => {
    return {
        type: SINGLE_PRODUCT_SET, payload: product
    }
}

//get single product view
export const getSingleProduct = () => {
    return {
        type: SINGLE_PRODUCT_GET
    }
}

//increment product
export const increment = (data) => {
    return async dispatch => {
        dispatch(addTocart(data))
    }
}

//decrement product
export const decrement = ({ id, cart }) => {
    return async dispatch => {
        var temcart = cart.filter((item) => item._id !== id)
        var temitem = cart.find((item) => item._id === id)
        // console.log(temitem)
        if (temitem.count - 1 === 0) {
            cart = temcart
        }
        else {
            temitem.count--;
            temitem.total = temitem.price * temitem.count;
            cart = [...temcart, temitem];
        }
        dispatch({ type: DECREMENT, payload: cart })
        dispatch({ type: SET_TOTAL })
        await axios.post('/setcart', cart)

    }
}
//remove caart 
export const remove = ({ id, cart }) => {
    return async dispatch => {
        var temcart = cart.filter((item) => item._id !== id)
        dispatch({ type: REMOVE, payload: temcart })
        dispatch({ type: SET_TOTAL })
        await axios.post('/setcart', temcart)

    }
}
//clear
export const clearAllcart = () => {
    return async dispatch => {
        const result = await axios.get('/clearCart')
        dispatch({ type: CLEAR })
    }
}
//filter
export const filterproduct = (data) => {
    return async dispatch => {
        console.log(data)
        dispatch({ type: FILTER, payload: data })
        dispatch({ type: SORT })
    }
}

//clear cart at logout
// export const clearCartLogout = () => {
//     alert('clearCartLogout')
//     return {
//         type: LOGOUT_CLEAR,
//     }
// }
export const clearCartLogout = () => {
    // alert('clearCartLogout')
    return {
        type: CLEAR_CART_LOGOUT,
    }
}

//*****************************************************************************************************************/

//add product

export const addProduct = (data) => {
    return async dispatch => {
        const { title, price, description, company, image } = data
        console.log(image)
        const formdata = new FormData();
        formdata.append('title', title)
        formdata.append('price', price)
        formdata.append('company', company)
        formdata.append('description', description)
        formdata.append('image', image)
        const result = await axios.post('/creatProduct', formdata)
        dispatch({ type: CREATE_PRODUCT, payload: result.data })
        console.log(result.data)
    }
}

//seleted data
export const seletedData = (product) => {
    return {
        type: SELECT_PRODUCT,
        payload: product
    }
}
//clear seleted data
export const ClearSeletedData = () => {
    return {
        type: CLEAR_SHOW_DATA,
    }
}

//update product data
export const updateProduct = (data) => {
    return async dispatch => {
        const { title, price, description, company, image } = data
        const formdata = new FormData();
        formdata.append('title', title)
        formdata.append('price', price)
        formdata.append('company', company)
        formdata.append('description', description)
        formdata.append('image', image)
        const result = await axios.patch(`/update/${data._id}`, formdata)
        dispatch({ type: UPDATE_PRODUCT, payload: result.data })
    }
}

// delete product
export const deletproduct = (id) => {
    return async dispatch => {
        await axios.delete(`/delet/${id}`)
        dispatch({ type: DELETE_PRODUCT, payload: id })
    }
}


///*********************************************************************/
// set payment
export const sentPayment = (data) => {
    return async dispatch => {
        const result = await axios.post('/creatPayment', data)
        console.log(result)
        dispatch({ type: SENT_PAYMENT, payload: result.data })
    }
}

//get all user payment product
export const getALLuserPaymentProduct = () => {
    return async dispatch => {
        const result = await axios.get('/getAllUserPayment')
        dispatch({ type: GET_PAYMENT, payload: result.data })
        // console.log(result)
    }
}

//set per user payment
export const setperUserPayment=(paymentitem)=>{
    return{
        type:SET_PER_USER_PAYMENT_DATA,
        payload:paymentitem
    }
}

//get per user payment
export const GETperUserPayment=()=>{
    return{
        type:GET_PER_USER_PAYMENT_DATA,
       
    }
}

//get self all payment prduct
export const getSelfpayment = () => {
    return async dispatch => {
        const result = await axios.get('/getUserPayment')
        dispatch({ type: SINGLE_USER_ALL_PAYMENT, payload: result.data })
    }
}

//set single user payment cart
export const setSinglepaymentCart = (productcart) => {
    console.log(productcart)
    return {

        type: SET_SINGLE_PAYMENT_CART, payload: productcart
    }
}

//get single user payment cart
export const getSinglepaymentCart = () => {

    return {

        type: GET_SINGLE_PAYMENT_CART
    }
}



