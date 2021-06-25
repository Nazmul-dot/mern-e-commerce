import React from 'react'
import { FaShopify, FaDollarSign, FaSign } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Home = () => {
    const serveice = [
        {
            id: 1,
            title: 'Free delivary',
            icon: <FaShopify />,
            text: <p>Lorem ipsum dolor sit, amet consectetur
            nam eaque, ex, odio quo veritatis porro
                 totam iusto neque autem voluptas.</p>
        },
        {
            id: 2,
            title: 'Ensure Security',
            icon: <FaSign />,
            text: <p>Lorem ipsum dolor sit, amet consectetur
            nam eaque, ex, odio quo veritatis porro
                 totam iusto neque autem voluptas.</p>
        },
        {
            id: 3,
            title: 'Return Policy',
            icon: <FaDollarSign />,
            text: <p>Lorem ipsum dolor sit, amet consectetur
            nam eaque, ex, odio quo veritatis porro
                 totam iusto neque autem voluptas.</p>
        },
    ]
    return (
        <>
            <div className='container-fluid'>
                <div className='row'>
                    <div className='col-md-10 mx-auto'>


                        <div style={{
                            
                            height: '80vh',
                            width: '100%',
                            display:'flex',
                            flexDirection:'column',
                            justifyContent:'center',
                            alignItems:'center',
                            backgroundImage: 'url(image/mainBcg.jpeg)',
                            backgroundPosition:'center',
                            backgroundRepeat:'no-repeat',
                            backgroundSize:'cover',
                            backgroundAttachment:'fixed'
                        }}>
                           <h1 style={{fontSize:'50px',color:'white',
                           textShadow:'4px #2F4F4F',
                        }}>welcome in our Shome</h1>
                        <Link to='/product' className='btn btn-info'>Product Page</Link>
                            
                    </div>

                </div>
                <div className='col-md-10 mx-auto'>
                    <div style={{ background: '#00CED1', width: '100%' }}>
                        <div className='row text-center'>
                            {
                                serveice.map((item) => {
                                    return (
                                        <div className='col-md-4 mx-auto  p-4'>
                                            <h3>{item.title}</h3>
                                            <p style={{ fontSize: '35px', color: 'white' }}>{item.icon}</p>
                                            <p>{item.text}</p>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>
                <div className='col-md-10 mx-auto mb-1'>
                    <div style={{background:'#2F4F4F',padding:'20px',textAlign:'center',color:'white'}}>
                        Footer
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default Home
