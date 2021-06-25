import React from 'react'

const HistCrItem = ({item}) => {
    return (
        <>
            <div className='row'>
                <div className='col-md-6 mx-auto  d-flex justify-content-center  align-items-center '>
                    <div>
                        <img src={item.image} alt="" />
                    </div>

                </div>
                <div className='col-md-6 mx-auto  d-flex  justify-content-center text-center '>
                    <div className=' d-flex align-items-center mt-3'>
                        <div className='text-center '>
                            <span>Title : {item.title} </span><br />
                            <span>Company : {item.company} </span><br />
                            <span>Price : {item.price} </span><br />
                            <span>Amount : {item.count} </span><br />
                            <span>Total : {item.total} </span><br />
                        </div>
                    </div>
                </div>
                <hr />
            </div>
        </>
    )
}

export default HistCrItem
