import React from 'react'
import {Link} from 'react-router-dom'
import { getinitials } from '../Utils/helper'

function ProfileInfo() {
  return (
    <>
    <div className="d-flex gap-3 text-center">
        <div style={{width:"50px", height:"50px"}} className='d-flex justify-content-center 
        align-items-center rounded-circle bg-secondary text-white'>
            {getinitials ("John Williams")}
        </div>
        <div className="flex-columns">
            <p>John Williams</p>
            <Link to='/login'><button className='border-0 bg-white text-primary fs-6'>Logout</button></Link>
        </div>
    </div>
    </>
  )
}

export default ProfileInfo