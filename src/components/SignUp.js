import { useState, useEffect } from "react"
import axios from "axios"
import { Link, useNavigate } from 'react-router-dom'
import { toast } from "react-toastify";
function SignUp() {
    const navigate = useNavigate()
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    useEffect(() => {
        const token = localStorage.getItem('TOKEN')
        if (token) {
            navigate('/')
        }
        
    })

    const handleSubmit = () => {
        if(!name){
            toast.error("Please Enter Name");
            return
        }
        if(!email){
            toast.error("Please Enter Email");
            return
        }
        if(!password){
            toast.error("Please Enter Password");
            return
        }
        axios.post('https://redblink-backend-task.onrender.com/SignUp',
            {
                name:name,
                email: email,
                password: password
            })
            .then(res => {
                console.log(res.data)
                if (res.data.code === 200) {
                    toast.success('SignedUp Successfully')
                    navigate('/login')
                } 
                if(res.data.code === 403){
                    toast.error('User Already Exists')
                }
                
            }).catch(err => {
                console.log(err)
            })
    }

    return (<>
        <h1 className="center"> SignUp </h1>
        <div className="outcard">
        Name
            <input
            required
                onChange={(e) => {
                    setName(e.target.value)
                }}
                value={name}
                className="inputs"
                type="text" /> <br />
            Email
            <input
            required
                onChange={(e) => {
                    setEmail(e.target.value)
                }}
                value={email}
                className="inputs"
                type="email" /> <br /> <br />
            Password
            <input
            required
                onChange={(e) => {
                    setPassword(e.target.value)
                }}
                value={password}
                className="inputs" type="password" /> <br /> <br />
            <button
                onClick={handleSubmit}
                className="btns"> SUBMIT </button>
            <Link style={{ textAlign: 'center', display: 'block', marginTop: '5px' }}
                to={'/login'}> SIGN IN </Link>
        </div>
    </>
    )
}


export default SignUp