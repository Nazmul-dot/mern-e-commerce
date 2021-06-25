import React from 'react'
import Product from '../products/Product'
import { useDispatch, useSelector } from 'react-redux'
export const RelativeProduct = () => {
    const { storeproducts, cart ,singleProduct} = useSelector(state => state.productData)
    const relativeProduct=storeproducts.filter((item)=>item.company===singleProduct.company)
    return (
        <>
            <div className='row'>
                <div className='col border'>
                    
                <Product 
                storeproducts={relativeProduct}
                cart={cart}
                />
                </div>
            </div>
        </>
    )
}
