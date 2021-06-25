import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { addTocart, getSingleProduct } from '../redux/product/prdkAction'
import { RelativeProduct } from './RelativeProduct'
const View = () => {
    const { storeproducts, cart, singleProduct } = useSelector(state => state.productData)
    console.log(singleProduct)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getSingleProduct())
    }, [])
    const addcart = () => {
        dispatch(addTocart({ id: singleProduct._id, storeproducts, cart }))
    }
    return (
        <>
            <div className='container-fluid my-4'>
                <div className='row'>
                    <div className='col-md-10 mx-auto'>

                        <div className='row mb-4'>
                            <div className='col-md-6 mx-autl border d-flex justify-content-md-center align-items-start align-items-md-center '>
                                <div className=''>
                                    <img src={singleProduct.image} className='image-fluid ' alt="" />
                                </div>

                            </div>
                            <div className='col-md-6 mx-autl border'>
                                <div className=' mt-3'>
                                    <span>Title:{singleProduct.title}</span><br />
                                    <span>Company:{singleProduct.company}</span><br />
                                    <span>Price:{singleProduct.price}</span><br />
                                    <span>Sold:{singleProduct.sold}</span><br />
                                </div>
                                <div className=' my-2'>
                                    <h5>Product Info : </h5>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing
                                    elit. Adipisci distinctio, voluptatibus
                                    amet tempore nesciunt reprehenderit
                                    reiciendis quo labore ullam quas, obcaecati animi
                                    laborum? Totam asperiores
                                    laudantium eius amet, sunt earum.
                                        </p>
                                </div>
                                <div className='my-4'>
                                    <button to='#' className='btn btn-dark' onClick={addcart}>Add Cart</button>
                                </div>
                            </div>
                        </div>
                        <h2>Relative Produce:</h2>
                        <RelativeProduct />

                    </div>
                </div>
            </div>
        </>
    )
}

export default View
