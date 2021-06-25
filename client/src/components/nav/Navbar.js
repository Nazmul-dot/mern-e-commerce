import React from 'react'
import { FaShoppingCart } from 'react-icons/fa';
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
const Navbar = () => {
    const { items } = useSelector(state => state.productData)
    const { userDetails, isAuthenticate } = useSelector(state => state.userData)
    return (
        <>
            <div className='container-fluid'>
                <div className='row' >
                    <div className='col-md-10 mx-auto'>
                            <nav class="navbar navbar-expand-lg navbar-light" style={{ background: '#e3f2fd' }}>
                            
                            <div class="container-fluid">
                                <div className='' style={{ position: 'relative' }}>
                                    <Link class="navbar-brand" to="/cartpage"><FaShoppingCart style={{ fontSize: '30px' }} /></Link>
                                    <div style={{ position: 'absolute', top: '-10px', right: '-4px', background: 'red', borderRadius: '20px', padding: '0 4px' }}>{items}</div>
                                </div>
                                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                    <span class="navbar-toggler-icon"></span>
                                </button>
                                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                                    <ul class="navbar-nav mb-2 mb-lg-0" style={{ marginLeft: 'auto' }}>
                                        {
                                            isAuthenticate ? (
                                                <>
                                                    <li class="nav-item">
                                                        <Link class="nav-link" to="/">Home</Link>
                                                    </li>
                                                    <li class="nav-item">
                                                        <Link class="nav-link" to="/product">Product</Link>
                                                    </li>

                                                    {
                                                        userDetails.name !== 'admin' ? (
                                                            <li class="nav-item">
                                                                <Link class="nav-link" to="/chistory">CHistory</Link>
                                                            </li>
                                                        ) : ('')
                                                    }

                                                    {
                                                        userDetails.name === 'admin' ? (
                                                            <>
                                                                <li class="nav-item">
                                                                    <Link class="nav-link" to="/addproduct">AddProduct</Link>
                                                                </li>
                                                                <li class="nav-item">
                                                                    <Link class="nav-link" to="/adminhistory">AdmHistory</Link>
                                                                </li>
                                                            </>
                                                        ) : ('')
                                                    }

                                                    <li class="nav-item">
                                                        <Link class="nav-link" to="/logout2">Logout</Link>
                                                    </li>
                                                </>
                                            ) : (

                                                <>
                                                    <li class="nav-item">
                                                        <Link class="nav-link" to="/login">Login</Link>
                                                    </li>
                                                    <li class="nav-item">
                                                        <Link class="nav-link" to="/register">Register</Link>
                                                    </li>
                                                </>
                                            )
                                        }
                                    </ul>
                                </div>
                            </div>
                        </nav>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar
