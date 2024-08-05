import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (  
    <div style={{backgroundImage:"linear-gradiant(#00d5ff,#0095ff,rgba(93,0,255,.555))"}} 
    className='d-flex flex-column justify-content-center align-itmes-center vh-100'>
      <h1>Welcome...</h1>
      <h1>Login Success Page</h1>
      <Link to='/login' className='btn btn-light my-5'>Logout</Link>
    </div>
  )
}

export default Home