import { Router, Link, navigate } from "@reach/router";
import io from "socket.io-client";
import "./App.css";
import Main from "./views/Main";
import Detail from "./views/Detail";
import Update from "./views/Update";
import New from "./views/New";
import Links from "./components/Links";
import Landing from "./views/Landing";
import Success from "./views/Success";
import { useEffect, useState } from "react";

function App() {
    const [socket] = useState(() => io(":8000"));

    useEffect(() => {
        console.log("is this running?");
        socket.on("news", (data) => console.log(data))
        socket.on("Welcome", (data) => console.log(data));
        
        return () => socket.disconnect(true);
    }, []);

    return (
        <div className="App">
            <div className="header">
                <h2 onClick={() => navigate("/devices")}>Device Manager</h2>
                <Router>
                    <Links path="/" cant="1" />
                    <Links path="/devices/*" cant="2" />
                </Router>
            </div>
            <div>
                <Router>
                    <Success path="/user" />
                    <New path="devices/new" />
                    <Main path="/devices" />
                    <Detail path="devices/:id" />
                    <Update path="devices/:id/edit" />
                    <Landing path="/" />
                </Router>
            </div>
        </div>
    );
}

export default App;
