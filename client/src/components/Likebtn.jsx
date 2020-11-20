import React, { useState } from "react";
import axios from "axios";

const LikeBtn = (props) => {
    const [btnState, setBtnState] = useState(false)

    //rewrite this
    const clickHandler = (id) => {
        let prevlikes = props.pet.likes
        axios.put("http://localhost:8000/api/pets/" + props.pet._id, {...props.pet, likes : prevlikes + 1} )
        .then((res) => console.log(res));
        setBtnState(true)
        props.updateLikes()
    };

    return (
        <button className='likebtn' disabled={btnState} type="button" onClick={() => clickHandler(props.pet.id)}>
            Like {props.pet.name}
        </button>
    );
};

export default LikeBtn;
