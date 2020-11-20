import React from "react"
import axios from "axios"
import {navigate} from "@reach/router"


const LogoutBtn = () => {

    const logoutHandler = () =>{
        axios
            .get("http://localhost:8000/api/logout", {
                withCredentials: true,
            })
            .then((res) => {
                if (res.data.msg) {
                    navigate("/");
                }
            });
    }

    return (
        <button className='logoutbtn' type="button" onClick={logoutHandler}>Logout</button>
    )
}

export default LogoutBtn
