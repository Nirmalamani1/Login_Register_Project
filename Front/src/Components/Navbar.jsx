import React from 'react'
import ProfileInfo from './ProfileInfo'

function Navbar() {
  return (
    <>
        <div className="navbar shadow">
            <div className="container-fluid">
                <h1>Navbar</h1>
                <ProfileInfo />
            </div>
        </div>
    </>
  )
}

export default Navbar