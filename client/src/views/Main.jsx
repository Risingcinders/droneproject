import React, { useEffect, useState } from "react";
import axios from "axios";
import DeviceCard from "../components/DeviceCard";
import { Link, navigate } from "@reach/router";

export default (props) => {
    const [deviceArr, setDevice] = useState([]);
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        axios
            .get("http://localhost:8000/api/devices")
            .then((res) => {
                setDevice(res.data.results);
                setLoaded(true);
            })
            .catch((err) => console.log(err));
    }, [loaded]);

    return (
        <div>
            <h5 className="subtitle">
                These are your devices:
            </h5>
            <div className="cardarray">
            {loaded ? deviceArr.map((device, index) => {
                return (   <DeviceCard device={device} index={index} />) }) : null}
                <div className="devicecard" onClick={() => navigate("/devices/new")}>
                    <h6>Add Device</h6>
                </div>
                </div>
        </div>
    );
};
