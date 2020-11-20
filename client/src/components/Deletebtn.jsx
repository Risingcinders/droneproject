import React from "react"
import axios from "axios"
import {navigate} from "@reach/router"


const DeleteBtn = props => {
    const deleteHandler = (id) => {
        axios.delete("http://localhost:8000/api/devices/" + id)
            .then(navigate("/devices"))
    }
    return (
        <button className='deletebtn' type="button" onClick={() => deleteHandler(props.id)}>Delete</button>
    )
}

export default DeleteBtn