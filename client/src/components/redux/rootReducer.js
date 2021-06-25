import {combineReducers} from 'redux'
import userReducer from './user/userReducer'
import productReducer from './product/prdkReducer'

const rootReducer= combineReducers({
    userData:userReducer,
    productData:productReducer,
})

export default rootReducer;