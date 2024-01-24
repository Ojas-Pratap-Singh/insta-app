import React, { useState } from "react";
import axios from "axios";

const Login = ({setToken}) => {
  const [user, setUser] = useState({
   
    email: "",
    password: ""
   
  });

  const {  email, password} = user;

  const [successMessage , setSuccessMessage] = useState("")
  const [errorMessage , setErrorMessage] = useState("")



  function updateUser(e) {
    let key = e.target.name
    let value = e.target.value
    setUser({...user, [key] : value})
  }

  async function implementLogin(e){

    e.preventDefault()
    //validation

    
    try{
        const response = await axios.post("https://instagram-express-app.vercel.app/api/auth/login",
    {
       
        "email" : email,
        "password" : password 
    })

    console.log("success",response.data)
    setSuccessMessage(response.data.message)
    setErrorMessage("")
    setToken(response.data.data.token)
    setUser({
      
    email: "",
    password: ""
   
    })
    }
    catch(err){
        console.log("Failure",err)
        setErrorMessage(err.response.data.message)
        setSuccessMessage("")

    }


  }

  return (
    <div>
        <h1>Login </h1>
        {
            successMessage && <h2>{successMessage}</h2>
        }
        {
             errorMessage && <h2>{errorMessage}</h2>
        }
      <form onSubmit={implementLogin}>
       
        <input
          type="email"
          placeholder="Enter email"
          name="email"
          value={email}
          onChange={updateUser}
        />
        <input
          type="password"
          placeholder="Enter password"
          name="password"
          value={password}
          onChange={updateUser}
        />
       
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Login;
