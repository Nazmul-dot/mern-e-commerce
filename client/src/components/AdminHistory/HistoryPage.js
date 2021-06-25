import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { getALLuserPaymentProduct,setperUserPayment } from '../redux/product/prdkAction'

const HistoryPage = () => {
    const { allUserpayment } = useSelector(state => state.productData)
    console.log(allUserpayment)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getALLuserPaymentProduct())
    }, [])

    const paymentview=(paymentitem)=>{
        dispatch(setperUserPayment(paymentitem))
        console.log(paymentitem)
    }
    return (
        <>
            <div className='container-fluid'>
                <div className='row'>
                    <div className='col-md-10 mx-auto'>
                        <h2 className='text-center'>Admin History.....</h2>
                    </div>
                    <div className='col-md-10 mx-auto my-3'>
                        {
                            allUserpayment ? (
                                allUserpayment.map((paymentitem) => {
                                    return (
                                        <div className='row'>
                                            <div className='col-md-4 mx-auto  text-center'>
                                                {paymentitem.customer_id}a
                                        </div>
                                            <div className='col-md-2 mx-auto  text-center'>
                                                {paymentitem.name}a
                                        </div>
                                            <div className='col-md-3 mx-auto  text-center' style={{ wordBreak: 'break-all' }}>
                                                {paymentitem.email}a
                                        </div>
                                            <div className='col-md-2 mx-auto  text-center'>
                                                {paymentitem.phone}a
                                        </div>
                                            <div className='col-md-1 mx-auto  text-center'>
                                                <Link to='/adminhistorycart' className='btn btn-info' onClick={()=>paymentview(paymentitem)}>view</Link>
                                            </div>
                                            <hr className='mt-1' style={{ width: '1060px' }} />
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

export default HistoryPage
