import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { getSelfpayment,setSinglepaymentCart } from '../redux/product/prdkAction'
import View from '../viewPage/View'
const History = () => {
    const { selfAllpayment } = useSelector(state => state.productData)
    console.log(selfAllpayment)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getSelfpayment())
    }, [])
    const prduct=(paymentitem)=>{
        dispatch(setSinglepaymentCart(paymentitem))
        // console.log(paymentitem)
    }
    return (
        <>
            <div className='container-fluid'>
                <div className='row'>
                    <div className='col-md-10 mx-auto'>
                        <h2 className='text-center'>My History.....</h2>
                    </div>
                    <div className='col-md-10 mx-auto my-3'>
                        {
                            selfAllpayment ? (
                                selfAllpayment.map((paymentitem) => {
                                    return (

                                        <div className='row'>
                                            <div className='col-md-4 mx-auto  text-center'>
                                                {paymentitem.customer_id}
                                        </div>
                                            <div className='col-md-2 mx-auto  text-center'>
                                            {paymentitem.name}
                                        </div>
                                            <div className='col-md-3 mx-auto  text-center' style={{wordBreak:'break-all'}}>
                                            {paymentitem.email}
                                        </div>
                                            <div className='col-md-2 mx-auto  text-center'>
                                            {paymentitem.phone}
                                        </div>
                                            <div className='col-md-1 mx-auto  text-center'>
                                                <Link to='/historycart' className='btn btn-info' onClick={()=>prduct(paymentitem)} >view</Link>
                                            </div>
                                            <hr className='mt-1' style={{width:'1060px'}}/>
                                        </div>
                                    )
                                })
                            ) : ('')
                        }


                    </div>
                </div>
            </div>
        </>
    )
}

export default History
