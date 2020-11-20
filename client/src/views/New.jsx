import React, { Fragment, useState } from "react";
import axios from "axios";
import { navigate } from "@reach/router";
import DeviceForm from "../components/DeviceForm";

const New = () => {
    const [dataObj, setDataObj] = useState({
        name: "",
        description: "",
        address: "",
        key:"",
    });
    const [errors, setErrors] = useState({});

    const onSubmitHandler = (e) => {
        e.preventDefault();
        axios.post("http://localhost:8000/api/devices", dataObj).then((res) => {
            console.log(res);
            if (res.data.results) {
                navigate("/devices");
            } else {
                res.data.driver
                    ? setErrors({
                          unique: { message: "Devices must have unique names" },
                      })
                    : setErrors(res.data.errors);
                console.log(errors);
            }
        });
    };

    const updateObj = (e) => {
        setDataObj({
            ...dataObj,
            [e.target.name]: e.target.value,
        });
    };

    return (
        <Fragment>
            <div>
                <h5 className="subtitle">Add a device</h5>
                <DeviceForm
                    handleSubmit={onSubmitHandler}
                    handleChange={updateObj}
                    form={dataObj}
                    errors={errors}
                    submitValue="Add Device"
                />
            </div>
        </Fragment>
    );
};

export default New;
