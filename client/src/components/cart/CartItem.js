import React from 'react'
import { FaAngleDown, FaAngleUp, FaTrash } from 'react-icons/fa';
// import { remove } from '../redux/product/prdkAction';
const CartItem = ({item,incre,decre,removitem}) => {
    return (
        <>
            <div className='row'>
                <div className='col-md-6 mx-auto  d-flex justify-content-center  align-items-center'>
                    <div>
                        <img src={item.image} alt="" />
                    </div>

                </div>
                <div className='col-md-6 mx-auto  d-flex flex-row flex-md-column justify-content-between'>
                    <div className=' d-flex align-items-center mt-3'>
                        <div className=''>
                            <span>Title : {item.title} </span><br />
                            <span>Company : {item.company} </span><br />
                            <span>Price : {item.price}</span><br />
                            <span>Amount : {item.count}</span><br />
                            <span>Total : {item.total}</span><br />
                        </div>
                    </div>
                    <div className=' my-5'>
                        <FaAngleDown style={{ fontSize: '25px', background: '#00BFFF', borderRadius: '15px' }}  onClick={()=>decre(item._id)} />
                        <span style={{ margin: '0 5px' }}>{item.count}</span>
                        <FaAngleUp style={{ fontSize: '25px', background: '#00BFFF', borderRadius: '15px' }} onClick={()=>incre(item._id)} />
                    </div>
                    <div className=' mt-auto mb-3'>
                        <button className='btn btn-dark' onClick={()=>removitem(item._id)}><FaTrash /></button>
                    </div>
                </div>
                <hr/>
            </div>
        </>
    )
}

export default CartItem
