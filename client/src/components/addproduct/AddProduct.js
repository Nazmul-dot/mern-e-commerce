import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addProduct, ClearSeletedData, updateProduct } from '../redux/product/prdkAction'
const initial = {
    title: '',
    price: '',
    image: '',
    description: '',
    company: '',
}
const AddProduct = () => {
    const { selected } = useSelector(state => state.productData)
   
    const dispatch = useDispatch()
    const [data, setdata] = useState(initial)

    // console.log(selected)

    useEffect(() => {
        if (selected._id) {
            setdata(selected)
        } else {
            setdata(initial)
        }
    }, [selected])

    const handlechange = (e) => {
        e.preventDefault();
        var name = e.target.name;
        var value;
        if (name === 'image') {
            value = e.target.files[0]
            console.log(value)
        } else {
            value = e.target.value;
        }
        setdata({ ...data, [name]: value })
    }


    const { title, price, description, company } = data


    const submit = (e) => {
        e.preventDefault();
        if (data._id) {
            dispatch(updateProduct(data))
        } else {
            dispatch(addProduct(data))
        }
        console.log(data)
        setdata(initial)
        
    }

const clear=(e)=>{
    e.preventDefault();
    dispatch(ClearSeletedData())
}
    return (
        <>
            <div className='container-fluid'>
                <div className='row'>
                    <div className='col-md-7 mx-auto border'>

                        <h1 className='mt-3 text-center'>Add Product in Database : </h1>
                        <form className='row my-3'>
                            <div className='col-md-6 mx-auto border my-1'>
                                <input type="text" onChange={handlechange} value={title} name='title' class="form-control" placeholder="Title" aria-label="First name" />
                            </div>
                            <div className='col-md-6 mx-auto border my-1'>
                                <input type="text" onChange={handlechange} value={company} name='company' class="form-control" placeholder="Company" aria-label="First name" />
                            </div>
                            <div className='col-md-6 mx-auto border my-1'>
                                <input type="number" onChange={handlechange} value={price} name='price' class="form-control" placeholder="Price" aria-label="First name" />
                            </div>
                            <div className='col-md-6 mx-auto border my-1'>
                                <input type="file" onChange={handlechange} name='image' class="form-control" aria-label="First name" />
                            </div>
                            <div className='col-md-12 mx-auto border my-1'>
                                <textarea onChange={handlechange} value={description} name='description' class="form-control" id="exampleFormControlTextarea1" placeholder='message' rows="3"></textarea>
                            </div>
                            <div className='col-md-12 mx-auto border my-1'>
                                <input type="submit" onClick={submit} value={data._id ? 'Update Product' : 'Add Product'} class="form-control btn btn-info" placeholder="image" aria-label="First name" />
                            </div>
                            {
                                data._id ? (
                                    <div className='col-md-12 mx-auto border my-1'>
                                        <input type="submit" onClick={clear} value='Clear' class="form-control btn btn-dark" placeholder="image" aria-label="First name" />
                                    </div>
                                ) : ('')
                            }

                        </form>

                    </div>
                </div>
            </div>
        </>
    )
}

export default AddProduct
