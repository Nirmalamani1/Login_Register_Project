import React, { useState } from 'react'
import { FaRegEye, FaRegEyeSlash } from 'react-icons/fa6'

function PasswordInput({ value, placeholder, onChange }) {
    const [showpass, setshowpass] = useState(false)
    const toggleshow = () => {
        setshowpass(!showpass)
    }
    return (
        <>
            <div className="d-flex justify-content-center border mt-3">
                <input type={showpass ? "text" : "password"}
                    onChange={onChange}
                    value={value}
                    placeholder={placeholder || "password"}
                    className='form-control border 0'
                />
                {
                    showpass ?
                        (
                            <FaRegEye
                                className='icons text-secondary'
                                size={28}
                                onClick={() => toggleshow()}
                            />
                        )
                        :
                        (
                            <FaRegEyeSlash
                                className='icons text-primary'
                                size={28}
                                onClick={() => { toggleshow() }}
                            />
                        )
                }
            </div>
        </>
    )
}

export default PasswordInput