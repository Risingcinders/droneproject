import React, { useEffect, useState } from "react";
import axios from "axios";
import { navigate } from "@reach/router";

const DeviceCard = (props) => {

    return (
        <div className="devicecard" onClick={() => navigate("/devices/" + props.device._id)}>
            <h6>{props.device.name}</h6>
        </div>
    );
};

export default DeviceCard;
