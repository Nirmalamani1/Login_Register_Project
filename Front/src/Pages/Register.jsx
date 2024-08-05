import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Navbar from '../Components/Navbar.jsx';
import PasswordInput from '../Components/PasswordInput.jsx';
import { ValidateEmail } from '../Utils/helper.js';
import axios from 'axios';

function Register() {
    const [name, setname] = useState("");
    const [email, setemail] = useState("");
    const [password, setpassword] = useState("");
    const [error, seterror] = useState("");
    const navigate = useNavigate();

    const handlelogin = (e) => {
        e.preventDefault();

        axios.post('http://localhost:8000/register', { name, email, password })
            .then(result => {
                console.log("result");

                if (result.data === "Success") {
                    alert("Already Registered...");
                    navigate('/login')
                }
                else {
                    alert("Registered successfully... Please Login to Proceed..");
                    navigate("/login")
                }
            }).catch(err => console.log(err));

            if(!name){
                seterror("Please Enter the Name")
                return;
            }
            if(!ValidateEmail(email)){
                seterror("Please Enter the Email")
                return;
            }
            if(!password){
                seterror("Please Enter the Password")
            }
    }

    return (
        <>
            <Navbar />
            <div className="d-flex text-center justify-content-center align-items-center mt-5">
                <div className="w-30 p-3 border">
                    <form onSubmit={handlelogin}>
                        <h4 className='fs-2'>Register</h4>
                        <input type='text' placeholder='Name' className='form-control mt-4' 
                        value={name} onChange={(e) => { setname(e.target.value) }} />
                        <input type='text' placeholder='Email' className='form-control mt-4' 
                        value={email} onChange={(e) => { setemail(e.target.value) }} />
                        <PasswordInput value={password} placeholder={password} 
                        onChange={(e) => setpassword(e.target.value)} />
                        {/* <input type='text' placeholder='Password' className='form-control mt-4' value={password} 
                        onChange={(e) => setpassword(e.target.value)} /> */}
                        <div className="d-grid mt-3">
                            <button type='submit' className='btn btn-primary'>Register</button>
                        </div>

                        {error && <p className='text-danger pb-1 pt-1'>{error}</p>}
                        <p className='fs-5 mt-3'>Already have an Account ? <Link to='/login'>Login</Link></p>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Register