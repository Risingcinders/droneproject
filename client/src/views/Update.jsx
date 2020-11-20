import React, { useEffect, useState } from "react";
import axios from "axios";
import { navigate } from "@reach/router";
import DeviceForm from "../components/DeviceForm";

const Update = (props) => {
    const { id } = props;
    const [errors, setErrors] = useState({});
    const [dataObj, setDataObj] = useState({
        name: "",
        description: "",
        type: "",
        skills: [],
        likes : 0
    });

    const updateObj = (e) => {
        setDataObj({
            ...dataObj,
            [e.target.name]: e.target.value,
        });
    };

    useEffect(() => {
        axios.get("http://localhost:8000/api/devices/" + id).then((res) => {
            setDataObj(res.data.results)
        });
    }, [errors, id]);

    const updateDev = (e) => {
        e.preventDefault();
        axios
            .put("http://localhost:8000/api/devices/" + id, dataObj)
            .then((res) => {
                if (res.data.results) {
                    navigate("/devices/" + id);
                } else {
                    res.data.name === "MongoError" ? setErrors({unique : {message : "Devices must have unique names"}}) : setErrors(res.data.errors);
                }
            });
    };

    return (
        <div>
            <h3>Edit {dataObj.name}</h3>
            <DeviceForm 
                form = {dataObj}
                errors={errors}
                handleChange={updateObj}
                handleSubmit={updateDev}
                submitValue="Update device"
            />
        </div>
    );
};

export default Update;
