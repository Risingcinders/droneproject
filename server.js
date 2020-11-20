require("dotenv").config();
const express = require("express");
const cors = require("cors");
const app = express();
const port = 8000;
const cookieParser = require("cookie-parser");
const jwt = require("jsonwebtoken");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(cors({credentials: true, origin: 'http://localhost:3000'}));
const server = app.listen(port, () =>
    console.log(`listenin on starboard: ${port}`)
);
const io = require("socket.io")(server, {
    cors: {
        origin: "*",
    },
});

require("./server/config/mongoose.config");
require("./server/routes/user.routes")(app);
require("./server/routes/auth.routes")(app);
require("./server/routes/device.routes")(app);

io.on("connection", (socket) => {
    console.log("a user connected", socket.id);
    socket.emit("news", {hello:"world"})
    socket.on("event_from_client", (data) => {
        socket.broadcast.emit("send_data_to_all_other_clients", data);
    });
    socket.on("disconnect", () => {
        console.log("Disconnection");
    });
});
