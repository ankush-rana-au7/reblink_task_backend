import { useState, useEffect } from "react"
import axios from "axios"
import { Link, useNavigate } from 'react-router-dom'
import { toast } from "react-toastify";

function Login() {
    const navigate = useNavigate()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    useEffect(() => {
        const token = localStorage.getItem('TOKEN')
        if (token) {
            navigate('/dashboard')
        }
        
    }, [])


    const handleSubmit = () => { 
        if(!email){
            toast.error("Please Enter Email");
            return
        }
        if(!password){
            toast.error("Please Enter Password");
            return
        }
        axios.post('https://redblink-backend-task.onrender.com/login',
            {
                email: email,
                password: password
            })
            .then(res => {
    
                if (res.data.code === 500) {
                    toast.warn('User Not Found')
                }
                
                if (res.data.code === 404) {
                    toast.error('Enter Correct Password')
                }
                if (res.data.code === 200) {
                    toast.success("Logged In successfully")

                    navigate('/')
                    localStorage.setItem('NAME', res.data.name)
                    localStorage.setItem('TOKEN', res.data.token)
                    localStorage.setItem('EMAIL', res.data.email)
                }
            }).catch(err => {
                console.log(err)
            });
        }

    return (<>
        <h1 className="center"> Login </h1>
        <div className="outcard">
            Email
            <input
                onChange={(e) => {
                    setEmail(e.target.value)
                }}
                value={email}
                className="inputs"
                type="email" /> <br /> <br />
            Password
            <input
                onChange={(e) => {
                    setPassword(e.target.value)
                }}
                value={password}
                className="inputs" type="password" /> <br /> <br />
            <button
                onClick={handleSubmit}
                className="btns"> SUBMIT </button>
            <Link style={{ textAlign: 'center', display: 'block', marginTop: '5px' }}
                to={'/signup'}> SIGN UP </Link>
            {/* <Link style={{ textAlign: 'center', display: 'block', marginTop: '5px' }}
                to={'/forget-pass'}> Forget Password </Link> */}
        </div>
    </>
    )
}


export default Login