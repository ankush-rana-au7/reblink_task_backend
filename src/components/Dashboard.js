import { useEffect } from "react"
import { Link, useNavigate } from 'react-router-dom'



function Dashboard() {
    const navigate = useNavigate()

    useEffect(() => {
        const token = localStorage.getItem('TOKEN')
        if (!token) {
            navigate('/login')
        }
        

    }, [])

    return (
        <div className="card" style ={{ textAlign: "center",
            display: "flex",
            minHeight: "100vh",
            alignItems: "center",
            justifyContent: "center",}}>
            <div>Dashboard</div>
            <span>Hello {localStorage.getItem('NAME')}</span>
            <div>
                <span> {localStorage.getItem('EMAIL')} </span>
                
                <button
                    onClick={() => {
                        localStorage.clear()
                        navigate('/login')
                    }}
                > LOGOUT </button>
            </div>



        </div>
    )
}


export default Dashboard