import React, { useState } from "react";
import axios from "axios";

const DashBoard = ({token}) => {
    const [message , setMessage] = useState("")

   async function getJokes(){
    try{
        const response = await axios.get("https://instagram-express-app.vercel.app/api/auth/zuku",{
            headers:{
                authorization : `Bearer ${token}`
            }
        })
        setMessage(response.data.data.message)
    }
    catch(err){
        console.log(err)
    }
    }


    return (
        <div>
            <h1>DashBoard</h1>
            {
                message && <h2>{message}</h2>
            }
            <button onClick={getJokes}>get jokes</button>
        </div>
    )
}

export default DashBoard