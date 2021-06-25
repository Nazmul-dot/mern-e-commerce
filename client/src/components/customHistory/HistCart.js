import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getSinglepaymentCart } from '../redux/product/prdkAction'
import HistCrItem from './HistCrItem'
const HistCart = () => {
    const { singleuserPaymentCart } = useSelector(state => state.productData)
    console.log(singleuserPaymentCart)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getSinglepaymentCart())
    }, [])
    return (
        <>
            <div className='container-fluid'>
                <div className='row'>
                    <div className='col-md-10 mx-auto my-5'>
                        {
                            singleuserPaymentCart?(

                                singleuserPaymentCart.map((item)=>{
                                    return(
                                        <HistCrItem
                                        key={item._id}
                                        item={item}
                                        />

                                    )
                                })
                            ):('')
                        }
                       

                    </div>
                </div>
            </div>
        </>
    )
}

export default HistCart
