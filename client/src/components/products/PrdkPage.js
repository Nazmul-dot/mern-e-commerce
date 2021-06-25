import React from 'react'
import PrdkFilter from './PrdkFilter'
import Product from './Product'
import { useDispatch, useSelector } from 'react-redux'
const PrdkPage = () => {
    const { storeproducts, cart } = useSelector(state => state.productData)
    return (
        <>
            <div className='container-fluid'>
                <div className='row'>
                    <div className='col-md-10 mx-auto'>
                        <PrdkFilter />
                        <Product
                            storeproducts={storeproducts}
                            cart={cart}
                        />
                    </div>
                </div>
            </div>
        </>
    )
}

export default PrdkPage
