import React, { useState } from 'react'
import UserContext from '../context/UserContext'

function Login() {
    const [username, setUsername] = useState('')
    const [password, setPassword]= useState('')
    const handleSbmit = () => {

    }
    return(
        <div>
            <h2>Login</h2>
            <input typr="text" placeholder='username'/>
            <input type='text' placeholder='password'/>

            <button onClick={handleSbmit}><Submit></Submit></button>
        </div>
    )
}

export default Login