import { PromiseProvider } from "mongoose";
import React, { Fragment } from "react";
import { Link } from "@reach/router";
import LogoutBtn from "../components/Logoutbtn";

const Links = (props) => {

    console.log(props);

    return (
        <Fragment>
            {props.cant == "1" ? (  // needs new logged in logic
                <div className="navbar">
                    <Link className="nav" to="/">
                        Home
                    </Link>
                </div>
            ) : ( // needs new logged in logic
                <div className="navbar">
                            <Link path="/" className="nav" to="/devices/new/">
                                Add New Device
                            </Link>
                            <LogoutBtn />
                </div>
            )}
        </Fragment>
    );
};

export default Links;
