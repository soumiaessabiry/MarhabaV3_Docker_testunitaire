import { useState } from "react"
import { NavLink , useNavigate } from "react-router-dom"
import Register from "./Register"
const Login=()=>{
    const [email,setEmail]=useState("")
    const [password ,setPassword]=useState("")
    const navigate=useNavigate()
    const datalogin={
        email,password
    }
    const Submit=(e)=>{
        e.preventDefault();
        console.log(datalogin)
    }
    const page_register=()=>navigate('/Register')
    return(
        <div className='login__container'>
            <h2>Login </h2>
            <form className='login__form'  onSubmit={Submit}>
                <label htmlFor='email'>Email</label>
                <input
                    type='text'
                    id='email'
                    name='email'
                    value={email}

                    onChange={(e)=>{setEmail(e.target.value)}}
                    
                    required
                />
                <label htmlFor='password'>Password</label>
                <input
                    type='password'
                    name='password'
                    id='password'
                    value={password}
                    onChange={(e)=>{setPassword(e.target.value)}}
                    required
                  
                />
                <button className='loginBtn'>Login</button>
                <p>
                    Don't have an account?{" "}
                    <span className='link' onClick={page_register} >
                        Register
                    </span>
                </p>
            </form>
        </div>
    )
}
export default Login