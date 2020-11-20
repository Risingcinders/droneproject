import React, { useState } from "react";
import axios from "axios";
import { navigate } from "@reach/router";
import Login from "../components/Login";
import Registration from "../components/Registration";

const Landing = (props) => {
    const [dataObj, setDataObj] = useState({
        firstName: "",
        lastName: "",
        userName: "",
        email: "",
        password: "",
        confirmPassword: "",
    });
    const [logObj, setLogObj] = useState({
        userName: "",
        password: "",
    });

    const [errors, setErrors] = useState({});

    const loginHandler = (e) => {
        e.preventDefault();
        axios
            .post("http://localhost:8000/api/login", logObj, {
                withCredentials: true,
            })
            .then((res) => {
                console.log("login Response:", res);
                if (res.data.msg) {
                    // localStorage.setItem("user",JSON.stringify(res.data.userLogged))
                    navigate("/devices");
                } else {
                    res.data.driver
                        ? setErrors({
                              unique: {
                                  message: "Pets must have unique names",
                              },
                          })
                        : setErrors(res.data.errors);
                    console.log("Errors:", errors);
                }
            });
    };

    const regHandler = (e) => {
        e.preventDefault();
        axios
            .post("http://localhost:8000/api/register", dataObj, {
                withCredentials: true,
            })
            .then((res) => {
                console.log("Reg Response:", res);
                if (res.data.msg) {
                    navigate("/devices");
                } else {
                    res.data.driver
                        ? setErrors({
                              unique: {
                                  message: "Pets must have unique names",
                              },
                          })
                        : setErrors(res.data.errors);
                    console.log("Errors:", errors);
                }
            });
    };

    const updateObj = (e) => {
        setDataObj({
            ...dataObj,
            [e.target.name]: e.target.value,
        });
    };
    
    const updateLogObj = (e) => {
        setLogObj({
            ...logObj,
            [e.target.name]: e.target.value,
        });
    };

    return (
        <div className="index">
            <Login
                handleSubmit={loginHandler}
                handleChange={updateLogObj}
                form={logObj}
                errors={errors}
                submitValue="Login"
            />
            <Registration
                handleSubmit={regHandler}
                handleChange={updateObj}
                form={dataObj}
                errors={errors}
                submitValue="Register"
            />
        </div>
    );
};

export default Landing;
