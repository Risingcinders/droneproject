import React, { Fragment, useEffect, useState } from "react";
import { Link } from "@reach/router";
import axios from "axios";
import DeleteBtn from "../components/Deletebtn";
const io = require("socket.io-client");

const Detail = (props) => {
    const [device, setdevice] = useState({});
    const [statesObj, setStatesObj] = useState({});


    useEffect(() => {
        axios
            .get("http://localhost:8000/api/devices/" + props.id)
            .then((res) => setdevice(res.data.results));
    }, []);

    const doRed = () => {
        axios.get("http://99.189.76.162/api/red")
        .then(res => updateState(res.data.state, "red"))
    }
    const doGreen = () => {
        axios.get("http://99.189.76.162/api/green")
        .then(res => updateState(res.data.state, "green"))
    }
    const doBlue = () => {
        axios.get("http://99.189.76.162/api/blue")
        .then(res => updateState(res.data.state, "blue"))
    }

    const updateState = (state, key) => {
        setStatesObj({...statesObj, [key] : state })
    }



    // const [socket] = useState(() => io("192.168.1.239"));

    // "http//99.189.76.162"
    
    // useEffect(() => {
    //     console.log("is this running?");
    //     socket.on("news", (data) => console.log(data))
    //     return () => socket.disconnect(true);
    // }, []);
    
    return (
        <div className="main">
            <div className="details">
                <h5 className="subtitle">Details about: {device.name} </h5>
                <table>
                    <tbody>
                        <tr>
                            <td>Address:</td>
                            <td>{device.address}</td>
                        </tr>
                        <tr>
                            <td>Description:</td>
                            <td>{device.description}</td>
                        </tr>
                    </tbody>
                </table>
                <DeleteBtn id={props.id} name={device.name} />
            </div>
            <Link className="detaillink" to={"/devices/" + props.id + "/edit"}>
                Edit {device.name}
            </Link>
            <div className="actions">
                <div className="red" style={statesObj.red ? {opacity:1} : {opacity:.5}} onClick={doRed}>
                    <h6>Red Light</h6>
                </div>
                <div className="green" style={statesObj.green ? {opacity:1} : {opacity:.5}} onClick={doGreen}>
                    <h6>Green Light</h6>
                </div>
                <div className="blue" style={statesObj.blue ? {opacity:1} : {opacity:.5}} onClick={doBlue}>
                    <h6>Blue Light</h6>
                </div>
            </div>
        </div>
    );
};

export default Detail;
