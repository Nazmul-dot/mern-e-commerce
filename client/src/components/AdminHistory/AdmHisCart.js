import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { GETperUserPayment } from '../redux/product/prdkAction'
const AdmHisCart = () => {
    const { perUserPayment } = useSelector(state => state.productData)
    console.log(perUserPayment)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(GETperUserPayment())
    }, [])
    return (
        <>
            <div className='container-fluid'>
                <div className='row'>
                    <div className='col-md-10 mx-auto my-5'>
                        {
                            perUserPayment.products ? (
                                perUserPayment.products.map((item) => {
                                    return (
                                        <div className='row'>
                                            <div className='col-md-6 mx-auto  d-flex justify-content-center  align-items-center '>
                                                <div>
                                                    <img src={item.image} alt="" />
                                                </div>

                                            </div>
                                            <div className='col-md-6 mx-auto  d-flex  justify-content-center text-center '>
                                                <div className=' d-flex align-items-center mt-3'>
                                                    <div className='text-center ' style={{marginRight:'15px'}}>
                                                    <h5>Product info : </h5>
                                                        <span>Title : {item.title} </span><br />
                                                      <span>Company : {item.company} </span><br />
                                                        <span>Price : {item.price} </span><br />
                                                       <span>Amount : {item.count} </span><br />
                                                        <span>Total : {item.total} </span><br />
                                                    </div>
                                                    <div className='text-center   '>
                                                        <h5>Adress : </h5>
                                                        <span>Vibag : {perUserPayment.vibag} </span><br />
                                                        <span>Jela : {perUserPayment.jela} </span><br />
                                                        <span>Thana : {perUserPayment.thana} </span><br />
                                                        <span>Uniyon : {perUserPayment.uniyon} </span><br />
                                                        <span>Alaka : {perUserPayment.alaka} </span><br />
                                                    </div>
                                                </div>
                                            </div>
                                            <hr />
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

export default AdmHisCart
