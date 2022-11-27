import { useState } from "react"
import axios  from "axios"
import { NavLink , useNavigate } from "react-router-dom"
import Register from "./Register"
import dashbord from "./Dachbord"
import PhoneVerify from "./PhoneVerify"

const Login=()=>{
    const [phone,setPhone]=useState("")
    const [email,setEmail]=useState("")
    const [password ,setPassword]=useState("")
    const [error ,setError]=useState(false)
    const [erremail ,setErrmail]=useState(false)
    const err={
        "color":"red",
        "fontSize":"20px"
    }

    const navigate=useNavigate()
    const datalogin={
        email,password,phone
    }
    const Submit=async(e)=>{
        e.preventDefault();
        if( email.length==0 || password.length==0|| phone.length==0){
            setError(true)
        }else{
        await axios.post('http://localhost:4011/Marhaba/auth/login',datalogin )
        .then((responce)=>{
            const verficemail =responce.data.message
            if(verficemail!=undefined){
                setErrmail(true)
            }else{
                // localStorage.setItem("User",responce.data.messagesuccess.username)
                // localStorage.setItem("role",responce.data.messagesuccess.role)
                // localStorage.setItem("phone",responce.data.messagesuccess.phone)
                // window.location.replace('/dashbord') 
                console.log(responce)

                
            }
        
        }).catch((err)=>{
            console.log(err)
        })
        }
    }
    const page_register=()=>navigate('/Register')
    return(
        <div className='login__container'>
            <h2>Login </h2>
            {(erremail)?<span className="mb-2" style={err}>email is not exist</span>:""}

            <form className='login__form'  onSubmit={Submit}>
                <label htmlFor='email'>Email</label>
                <input
                    type='text'
                    id='email'
                    name='email'
                    value={email}

                    onChange={(e)=>{setEmail(e.target.value)}}
               
                />
               {(error && email.length<=0  )?<span className="mb-2" style={err}>email obligatoir</span>:""}

                <label htmlFor='password'>Password</label>
                <input
                    type='password'
                    name='password'
                    id='password'
                    value={password}
                    onChange={(e)=>{setPassword(e.target.value)}}
                   
                  
                />
               {(error && password.length<=0  )?<span className="mb-2" style={err}>password obligatoir</span>:""}

                <label htmlFor='tel'>phone</label>
                <input
                type='tel'
                name='phone'
                id='phone'
                value={phone}
                onChange={(e)=>{setPhone(e.target.value)}}
            />
            {(error && phone.length<=0  )?<span className="mb-2" style={err}>phone obligatoir</span>:""}

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