import React, { useState } from "react"
import "./register.css"
import axios from "axios"
import { useHistory } from "react-router-dom"

const Register = () => {

    const history = useHistory()

    const [ admin, setadmin] = useState({
        name: "",
        email:"",
        phoneno:"",
        password:"",
        reEnterPassword: ""
    })

    const handleChange = e => {
        const { name, value } = e.target
        setadmin({
            ...admin,
            [name]: value
        })
    }

    const register = () => {
        const { name, email,phoneno, password, reEnterPassword } = admin
        if( name && email && phoneno && password && (password === reEnterPassword)){
            axios.post("http://localhost:9002/register", admin)
            .then( res => {
                alert(res.data.message)
                history.push("/login")
            })
        } else {
            alert("invlid input")
        }
        
    }

    return (
        <div className="register">
            {console.log("admin", admin)}
            <h1>Register</h1>
            <input type="text" name="name" value={admin.name} placeholder="Your Name" onChange={ handleChange }></input>
            <input type="text" name="email" value={admin.email} placeholder="Your Email" onChange={ handleChange }></input>
            <input type="text" name="phoneno" value={admin.phoneno} placeholder="Your Moile No" onChange={ handleChange }></input>
            <input type="password" name="password" value={admin.password} placeholder="Your Password" onChange={ handleChange }></input>
            <input type="password" name="reEnterPassword" value={admin.reEnterPassword} placeholder="Re-enter Password" onChange={ handleChange }></input>
            <div className="button" onClick={register} >Register</div>
            <div>or</div>
            <div className="button" onClick={() => history.push("/login")}>Login</div>
        </div>
    )
}

export default Register