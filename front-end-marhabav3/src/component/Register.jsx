import { useState  } from "react"
import axios from "axios"
import { NavLink ,useNavigate } from "react-router-dom"
import Login from "./Login"
const Register=()=>{
const [username,setUsername]=useState("")
const [email,setEmail]=useState("")
const [password ,setPassword]=useState("")
const [phone ,setPhone]=useState("")
const [error ,setError]=useState(false)
const [erroremail ,setErrmail]=useState(false)
const err={
    "color":"red",
    "fontSize":"20px"
}
const  navigate= useNavigate()
const dataRegister={
    username,email,password,phone
}
const Submit= async(e)=>{
    e.preventDefault();
    if(username.length==0 || email.length==0 || password.length==0|| phone.length==0){
        setError(true)
    }else{
        await axios.post('http://localhost:4011/Marhaba/auth/Register',dataRegister )
        .then((responce)=>{
            const verficemail =responce.data.message
            if(verficemail!=undefined){
                setErrmail(true)
                // console.log(responce)
            }else{
                localStorage.setItem("User",username)
                window.location.replace('/login') 
                
            }
        
        }).catch((err)=>{
            console.log(err)
        })
    }
}
const Page_login = () => navigate("/Login");

return(
    <div className='login__container'>
        <h2>Register </h2>
        <form className='login__form'  onSubmit={Submit}>
            <label htmlFor='username'>Username</label>
            <input
                type='text'
             
                name='username'
                value={username}

                onChange={(e)=>{setUsername(e.target.value)}}
                
              
            />
                {(error && username.length<=0) ?<span style={err}>username obligatoir</span>:""}

            <label htmlFor='email'>Email</label>
            <input
                type='text'
                
                name='email'
                value={email}

                onChange={(e)=>{setEmail(e.target.value)}}
                
            />
            {(error && email.length<=0)?<span style={err}>email obligatoir</span>:""}

            <label htmlFor='password'>Password</label>
            <input
                type='password'
                name='password'
               
                value={password}
                onChange={(e)=>{setPassword(e.target.value)}}
                
                
            />
            {(error && password.length<=0)?<span style={err} >password obligatoir</span>:""}
            <label htmlFor='tel'>phone</label>
            <input
                type='tel'
                name='phone'
               
                value={phone}
                onChange={(e)=>{setPhone(e.target.value)}}
                
                
            />
            {(error && phone.length<=0  )?<span className="mb-2" style={err}>phone obligatoir</span>:""}

            <button className='loginBtn mt-2' >Register</button>
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