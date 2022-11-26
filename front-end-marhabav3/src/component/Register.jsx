import { useState  } from "react"
import { NavLink ,useNavigate } from "react-router-dom"
import Login from "./Login"
const Register=()=>{
const [username,setUsername]=useState("")
const [email,setEmail]=useState("")
const [password ,setPassword]=useState("")
const [phone ,setPhone]=useState("")
const  navigate= useNavigate()
const dataRegister={
    email,password,username,phone
}
const Submit=(e)=>{
    e.preventDefault();
    console.log(dataRegister)
}
const Page_login = () => navigate("/Login");

return(
    <div className='login__container'>
        <h2>Register </h2>
        <form className='login__form'  onSubmit={Submit}>
            <label htmlFor='username'>Username</label>
            <input
                type='text'
                id='username'
                name='username'
                value={username}

                onChange={(e)=>{setUsername(e.target.value)}}
                
                required
            />
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
            <label htmlFor='tel'>phone</label>
            <input
                type='tel'
                name='phone'
                id='phone'
                value={phone}
                onChange={(e)=>{setPhone(e.target.value)}}
                required
                
            />
            <button className='loginBtn' >Register</button>
            <p>

                <span className='link' onClick={Page_login} >
                    Login
                </span>
            </p>
        </form>
    </div>
)
    
}
export default Register