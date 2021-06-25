import React,{useState,useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { sentPayment } from '../redux/product/prdkAction'
const initial={
    name:'',
    email:'',
    phone:'',
    vibag:'',
    jela:'',
    thana:'',
    uniyon:'',
    alaka:'',
    amount:''
}
const Payment = () => {
    const { cart, storeproducts,subtotal } = useSelector(state => state.productData)
    const dispatch = useDispatch()
    const [data,setdata]=useState(initial)
    const handlechange=(e)=>{
        const value=e.target.value;
        const name=e.target.name;
        setdata({...data,[name]:value})
    }

   
    useEffect(()=>{
        setdata({...data,amount: subtotal})
       },[subtotal])

    const {name,email,phone,vibag,jela,thana,uniyon,alaka,amount}=data
    const submit=(e)=>{
        e.preventDefault()
        dispatch(sentPayment(data))
        setdata(initial)
        // console.log(data)
    }
    return (
        
        <>
            <div className='container-fluid'>
                <div className='row'>
                    <div className='col-md-8 mt-5 mx-auto'>
                        <h2>Purcech Your Product via Sent Payment : </h2>
                    </div>
                    <div className='col-md-8 mx-auto '>

                        <form className='row'>
                            <div className='col-md-6 mx-auto '>
                                <input onChange={handlechange} name='name' value={name} type="text" class="form-control my-1" placeholder="Name" aria-label="First name" />
                            </div>
                            <div className='col-md-6 mx-auto '>
                                <input onChange={handlechange} name='email' value={email} type="email" class="form-control my-1" placeholder="Email" aria-label="First name" />
                            </div>
                            <div className='col-md-6 mx-auto '>
                                <input onChange={handlechange} name='phone' value={phone} type="number" class="form-control my-1" placeholder="Phone" aria-label="First name" />
                            </div>
                            <div className='col-md-6 mx-auto '>
                                <input onChange={handlechange} name='vibag' value={vibag} type="text" class="form-control my-1" placeholder="Vibag" aria-label="First name" />
                            </div>
                            <div className='col-md-6 mx-auto '>
                                <input onChange={handlechange} name='jela' value={jela} type="text" class="form-control my-1" placeholder="Jela" aria-label="First name" />
                            </div>
                            <div className='col-md-6 mx-auto '>
                                <input onChange={handlechange} name='thana' value={thana} type="text" class="form-control my-1" placeholder="Thana" aria-label="First name" />
                            </div>
                            <div className='col-md-6 mx-auto '>
                                <input onChange={handlechange} name='uniyon' value={uniyon} type="text" class="form-control my-1" placeholder="Uniyon" aria-label="First name" />
                            </div>
                            <div className='col-md-6 mx-auto '>
                                <input onChange={handlechange} name='alaka' value={alaka} type="text" class="form-control my-1" placeholder="Alaka" aria-label="First name" />
                            </div>
                            <div className='col-md-6 mx-auto '>
                                <input onChange={handlechange} name='amount' value={amount} type="text" class="form-control my-1" placeholder="Amount" aria-label="First name" />
                            </div>
                            <div className='col-md-12 mx-auto '>
                                <input type="submit" onClick={submit} valu="Sent Payment" class="form-control my-1 btn btn-info" placeholder="First name" aria-label="First name" />
                            </div>

                        </form>

                    </div>
                </div>
            </div>
        </>
    )
}

export default Payment
