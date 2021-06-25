import React from 'react'
import PrdkItem from './PrdkItem'
import { useDispatch, useSelector } from 'react-redux'
import { addTocart, setSingleProduct,seletedData,deletproduct } from '../redux/product/prdkAction'
const Product = ({ storeproducts, cart }) => {
    const { isAuthenticate } = useSelector(state => state.userData)
    const dispatch = useDispatch()
    console.log(storeproducts)
    const addcart = (id) => {
        // alert('addcart')
        if (isAuthenticate) {
            dispatch(addTocart({ id, storeproducts, cart }))
        } else {
            // alert('plz login')
        }

    }
    const view = (product) => {
        // alert('cart')
        if (isAuthenticate) {
            dispatch(setSingleProduct(product))
        } else {
            // alert('plz login')
        }

    }
    const deleteitem = (id) => {
        // alert('delet')
        dispatch(deletproduct(id))
    }
    const updateitem = (product) => {
        // alert('update')
        dispatch(seletedData(product))

    }
    return (
        <>

            <div className='row'>
                <div className='col'>
                    <div className='row my-4'>
                        {
                            storeproducts ? (
                                storeproducts.map((product) => {
                                    return (
                                        <PrdkItem
                                            key={product._id}
                                            product={product}
                                            addcart={addcart}
                                            view={view}
                                            deleteitem={deleteitem}
                                            updateitem={updateitem}
                                        />
                                    )
                                })
                            )

                                : ('')
                        }
                    </div>
                </div>
            </div>

        </>
    )
}

export default Product
