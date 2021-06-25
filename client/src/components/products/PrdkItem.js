
import React from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
const PrdkItem = ({ product, addcart, view, deleteitem, updateitem }) => {
    const { userDetails } = useSelector(state => state.userData)
    return (
        <>

            <div className='col-md-4 mx-auto d-flex justify-content-center my-2'>
                <div class="card" style={{ width: '17rem' }} >
                    <img src={product.image} class="card-img-top" height="200px" alt="..." />
                    <div class="card-body">
                        <h5 class="card-title">Title : {product.title}</h5>
                        <div className='my-2 '>
                            <span>Company : {product.company} </span> <br />
                            <span>Price : {product.price} </span> <br />
                            <span>Sold : {product.sold} </span> <br />
                        </div>

                        {
                            userDetails.name === 'admin' ? (
                                <>
                                    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                        <Link to="#" class="btn btn-primary" onClick={() => deleteitem(product._id)}>delet</Link>
                                        <Link to="/addproduct" class="btn btn-primary" onClick={() => updateitem(product)}>edit</Link>
                                    </div>
                                </>
                            )

                                : (
                                    <>
                                        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                            <Link to="#" class="btn btn-primary" onClick={() => addcart(product._id)}>add cart</Link>
                                            <Link to="/view" class="btn btn-primary" onClick={() => view(product)}>View</Link>
                                        </div>
                                    </>
                                )
                        }

                    </div>
                </div>

            </div>
        </>
    )
}

export default PrdkItem
