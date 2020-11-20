import React, { Fragment, useEffect, useState } from "react";
import { Link } from "@reach/router";
import axios from "axios";
import DeleteBtn from "../components/Deletebtn";
const io = require("socket.io-client");

const Detail = (props) => {
    const [device, setdevice] = useState({});

    useEffect(() => {
        axios
            .get("http://localhost:8000/api/devices/" + props.id)
            .then((res) => setdevice(res.data.results));
    }, []);

    const doRed = () => {
        axios.get("http://99.189.76.162/api/red")
    }
    const doGreen = () => {
        axios.get("http://99.189.76.162/api/green")
    }
    const doBlue = () => {
        axios.get("http://99.189.76.162/api/blue")
    }

    const [socket] = useState(() => io("192.168.1.239"));

    // "http//99.189.76.162"
    
    useEffect(() => {
        console.log("is this running?");
        socket.on("news", (data) => console.log(data))
        return () => socket.disconnect(true);
    }, []);
    
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
                <div onClick={doRed}>
                    <h6>Red Light</h6>
                </div>
            </div>
            <div className="actions">
                <div onClick={doGreen}>
                    <h6>Green Light</h6>
                </div>
            </div>
            <div className="actions">
                <div onClick={doBlue}>
                    <h6>Blue Light</h6>
                </div>
            </div>
        </div>
    );
};

export default Detail;
