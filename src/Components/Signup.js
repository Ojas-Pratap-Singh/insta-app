import React, { useState } from "react";
import axios from "axios";

const Signup = ({setToken}) => {
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const { name, email, password, confirmPassword } = user;

  const [successMessage , setSuccessMessage] = useState("")
  const [errorMessage , setErrorMessage] = useState("")



  function updateUser(e) {
    let key = e.target.name
    let value = e.target.value
    setUser({...user, [key] : value})
  }

  async function implementSignup(e){

    e.preventDefault()
    //validation

    
    try{
        const response = await axios.post("https://instagram-express-app.vercel.app/api/auth/signup",
    {
        "name" : name,
        "email" : email,
        "password" : password 
    })

    console.log("success",response.data)
    setSuccessMessage(response.data.message)
    setErrorMessage("")
    setToken(response.data.data.token)
    setUser({
        name: "",
    email: "",
    password: "",
    confirmPassword: ""
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
        <h1>SignUp</h1>
        {
            successMessage && <h2>{successMessage}</h2>
        }
        {
             errorMessage && <h2>{errorMessage}</h2>
        }
      <form onSubmit={implementSignup}>
        <input
          type="text"
          placeholder="Enter name"
          name="name"
          value={name}
          onChange={updateUser}
        />
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
        <input
          type="password"
          placeholder="Enter confirmPassword"
          name="confirmPassword"
          value={confirmPassword}
          onChange={updateUser}
        />
        <button type="submit">Submit</button>
      </form>
      <hr />
    </div>
  );
};

export default Signup;
