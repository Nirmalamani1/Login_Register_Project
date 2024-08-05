import React, {useState} from 'react'
import {Link, useNavigate} from 'react-router-dom'
import Navbar from '../Components/Navbar.jsx';
import PasswordInput from '../Components/PasswordInput.jsx';
import { ValidateEmail } from '../Utils/helper.js';
import axios from 'axios'

function Login() {
    const [email, setemail] = useState("");
    const [password, setpassword] = useState("");
    const [error, seterror] = useState("");
    const navigate = useNavigate();

    const handlelogin = (e) => {
        e.preventDefault();

        axios.post('http://localhost:8000/login', {email,password})
        .then(result=>{
            console.log("login success");
        
        if(result.data === "Success"){
            console.log("Login Success");
            alert("Login Successfully Completed...");
            navigate('/todos')
        }
        else{
            alert("Incorrect Password.. Please try again");
        }
    }).catch (err => console.log(err));
    
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
                        <h4 className='fs-2'>Login Page</h4>
                        <input type='text' placeholder='Email' className='form-control mt-4' value={email} 
                        onChange={(e) => {setemail(e.target.value)}} />
                        <PasswordInput value={password} placeholder={password} onChange={(e)=> setpassword(e.target.value)} />
                        <div className="d-grid mt-3">
                            <button type='submit' className='btn btn-primary'>Login</button>
                        </div>
                        {error && <p className='text-danger pb-1 pt-1'>{error}</p>}
                        <p className='fs-5 mt-3'>Not Yet Registered Yet ? <Link to='/register'>Create an Account</Link></p>
                    </form>
            </div>
        </div>
    </>
  )
}
export default Login;