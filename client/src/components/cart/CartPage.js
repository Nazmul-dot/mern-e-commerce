import React from 'react'
import CartItem from './CartItem';
import { useDispatch, useSelector } from 'react-redux'
import { increment, decrement, remove,clearAllcart } from '../redux/product/prdkAction'
import { Link } from 'react-router-dom';
const CartPage = () => {
    const { cart, storeproducts,subtotal } = useSelector(state => state.productData)
    const dispatch = useDispatch()
    console.log(cart)
    console.log(storeproducts)
    const incre = (id) => {
        // alert('incre')
        dispatch(increment({ id, storeproducts, cart }))
    }
    const decre = (id) => {
        // alert('decre')
        dispatch(decrement({ id, cart }))
    }
    const removitem = (id) => {
        // alert('remove')
        dispatch(remove({ id, cart }))
    }
    return (
        <>
            <div className='container-fluid'>
                <div className='row'>
                    <div className='col-md-10 text-center'>
                        {
                            subtotal===0?(<h1>Your Cart Is Empty............</h1>):('')
                        }
                    </div>
                    <div className='col-md-10 mx-auto '>
                        {
                            cart ? (
                                cart.map((item) => {
                                    return (
                                        <CartItem
                                            key={item._id}
                                            item={item}
                                            incre={incre}
                                            decre={decre}
                                            removitem={removitem}
                                        />
                                    )
                                })
                            )

                                : ('')
                        }
                    </div>
                    <div className='col-md-10 mx-auto  text-center'>
                        <div className=''>
                            <h2 className='my-3'>Total Amount : {subtotal} </h2>
                            <Link to={!subtotal?'#':'/payment'} className='btn btn-info'>Purcech</Link> <br/>
                            <button className='btn btn-dark mb-5 mt-3' style={{padding:'5px 15px'}} onClick={()=>dispatch(clearAllcart())}>Clear</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CartPage
