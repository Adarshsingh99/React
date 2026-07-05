import React, { useContext, useState } from "react"
import UserContext from "../Context/UserContext"

function Login(){
    const[Username , setUsername] = useState('')  // usename state
    const[Password,setPassword] = useState ('')  // password component

    const{setUser} = useContext(UserContext) // userContext... aese bahut sare context banane pad sakte hai 

    const handleSubmit=(e)=>{
      e.preventDefault()
      setUser({Username,Password})
    }
    return(
        <>
        <h1>Login</h1>
        <input type="text"
        value={Username}
        onChange={(e)=> setUsername(e.target.value)}
        placeholder="type Username"/> 

        <input type="text"
        value={Password}
        onChange={(e)=> setPassword(e.target.value)}
        placeholder="type Password"/>
        <button onClick={handleSubmit}>Submit</button>
         </>
    )
}
export default Login