import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { filterproduct } from '../redux/product/prdkAction'
const PrdkFilter = () => {
    const { company, search, storeproducts } = useSelector(state => state.productData)
    var companies = storeproducts.map((item) => item.company)
    var uniqueCompanies = [...new Set(companies)]
    console.log(uniqueCompanies)
    const dispatch = useDispatch()
    const handlechange = (e) => {
        e.preventDefault()
        const value = e.target.value;
        const name = e.target.name;
        dispatch(filterproduct({ name, value }))
        // console.log(name,value)
    }
    return (
        <>
            <section>
                <form className='row my-4'>
                    <div className='col-md-4 mx-auto my-1'>
                        <div className='row'>
                            <div className='col-md-4'>
                                Company:
                            </div>
                            <div className='col-md-8'>
                                <select value={company} onChange={handlechange} name='company' class="form-select" aria-label="Default select example">
                                    <option selected>all</option>
                                    {
                                        uniqueCompanies.map((item) => {
                                            return (
                                                <option value={item}>{item}</option>
                                            )
                                        })

                                    }
                                </select>
                            </div>
                        </div>

                    </div>
                    <div className='col-md-8 mx-auto my-1'>
                        <input value={search} onChange={handlechange} name='search' type="text" class="form-control" placeholder="Search" aria-label="First name" />
                    </div>
                </form>
            </section>
        </>
    )
}

export default PrdkFilter
