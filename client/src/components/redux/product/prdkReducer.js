import { filterproduct } from './prdkAction'
import {
    GET_PRODUCT, GET_STORAGE_CART, SET_TOTAL, ERROR_PRODUCT,
    CLEAR_CART_LOGOUT, SINGLE_PRODUCT_SET, SINGLE_PRODUCT_GET, FILTER, SORT, CLEAR,
    ADD_TO_CART, DECREMENT, REMOVE, CREATE_PRODUCT, CLEAR_SHOW_DATA,
    DELETE_PRODUCT, SELECT_PRODUCT, UPDATE_PRODUCT, SENT_PAYMENT, GET_PAYMENT,
    SINGLE_USER_ALL_PAYMENT, SET_SINGLE_PAYMENT_CART, SET_PER_USER_PAYMENT_DATA, GET_PER_USER_PAYMENT_DATA,
    GET_SINGLE_PAYMENT_CART
} from './prdkType'

const initialProductState = {
    storeproducts: [],
    filterproduct: [],
    cart: [],
    items: 0,
    subtotal: 0,
    singleProduct: {},
    search: '',
    company: 'all',
    selected: {},
    allUserpayment: [],
    perUserPayment: {},
    selfAllpayment: [],
    singleuserPaymentCart: [],
    loading: true,
    error: '',
}

const productReducer = (state = initialProductState, action) => {
    switch (action.type) {
        case GET_PRODUCT:
            return {
                ...state,
                storeproducts: action.payload,
                filterproduct: action.payload,
                loading: false,
            }
        case GET_STORAGE_CART:
            return {
                ...state,
                cart: action.payload,
                loading: false,
            }
        case ADD_TO_CART:
            return {
                ...state,
                cart: action.payload
            }
        case SET_TOTAL:
            console.log(state.cart)
            var total = 0;
            var count = 0;
            state.cart.forEach((item) => {
                total += item.total;
                count += item.count;
            })
            return {
                ...state,
                subtotal: total,
                items: count,
            }

        case SINGLE_PRODUCT_SET:
            // console.log(action.payload)
            localStorage.setItem("singleproduct", JSON.stringify(action.payload))
            return {
                ...state,
                singleProduct: action.payload
            }
        case SINGLE_PRODUCT_GET:
            if (localStorage.getItem('singleproduct')) {
                return {
                    ...state,
                    singleProduct: JSON.parse(localStorage.getItem('singleproduct'))
                }
            }

        case DECREMENT:
            console.log(action.payload)
            return {
                ...state,
                cart: action.payload
            }
        case REMOVE:
            return {
                ...state,
                cart: action.payload
            }
        case CLEAR:
            return {
                ...state,
                items: 0,
                subtotal: 0,
                cart: [],
            }
        case FILTER:
            console.log(action.payload)
            const { name, value } = action.payload
            return {
                ...state,
                [name]: value
            }
        case SORT:
            var temproduct = state.filterproduct
            if (state.company !== 'all') {
                temproduct = temproduct.filter((item) => item.company === state.company)
            }

            if (state.search !== '') {
                temproduct = temproduct.filter((item) => {
                    const regex = new RegExp(`${state.search}`, 'gi')
                    return item.company.match(regex) || item.title.match(regex)
                })
            }
            return {
                ...state,
                storeproducts: temproduct
            }

        //clear cate at a logout
        case CLEAR_CART_LOGOUT:
            return {
                ...state,
                cart: [],
                items: 0,
                subtotal: 0,

            }
        //////////////////////////////////////////****************************************** */
        //create product 
        case CREATE_PRODUCT:
            return {
                ...state,
                storeproducts: [...state.storeproducts, action.payload]
            }
        case SELECT_PRODUCT:
            console.log(action.payload)
            return {
                ...state,
                selected: action.payload
            }
        case CLEAR_SHOW_DATA:
            return {
                ...state,
                selected: {},
            }
        case UPDATE_PRODUCT:
            return {
                ...state,
                storeproducts: state.storeproducts.map((item) => {
                    return (
                        item._id === action.payload._id ? action.payload : item
                    )
                })
            }

        case DELETE_PRODUCT:
            return {
                ...state,
                storeproducts: state.storeproducts.filter((item) => item._id !== action.payload)
            }
        ////////////********************************************************************************************/
        //set payment
        case SENT_PAYMENT:
            return {
                ...state,
                cart: [],
                items: 0,
                subtotal: 0,
            }

        // get all user payment product
        case GET_PAYMENT:
            return {
                ...state,
                allUserpayment: action.payload
            }
        //set per user payment
        case SET_PER_USER_PAYMENT_DATA:
            localStorage.setItem('peruserPayment', JSON.stringify(action.payload))
            return {
                ...state,
                perUserPayment: action.payload
            }
        //get per user payment data
        case GET_PER_USER_PAYMENT_DATA:
            if (localStorage.getItem('peruserPayment')) {
                return {
                    ...state,
                    perUserPayment: JSON.parse(localStorage.getItem('peruserPayment'))
                }
            }
        //single user all payment
        case SINGLE_USER_ALL_PAYMENT:
            return {
                ...state,
                selfAllpayment: action.payload
            }
        //set single user payment caart
        case SET_SINGLE_PAYMENT_CART:
            localStorage.setItem("singlepaymenCart", JSON.stringify(action.payload.products))
            return {
                ...state,
                singleuserPaymentCart: action.payload.products
            }

        case GET_SINGLE_PAYMENT_CART:
            if (localStorage.getItem('singlepaymenCart')) {
                return {
                    ...state,
                    singleuserPaymentCart: JSON.parse(localStorage.getItem('singlepaymenCart'))
                }
            }



        case ERROR_PRODUCT:
            return {
                ...state,
                error: action.payload
            }
        default:
            return state
    }
}

export default productReducer;