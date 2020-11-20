const Auth = require("../controllers/auth.controller");
const { authenticate } = require("../config/jwt.config");

module.exports = (app) => {
    app.post("/api/register", Auth.register);
    app.post("/api/login", Auth.login);
    app.get("/api/logout", authenticate, Auth.logout);
    // this route now has to be authenticated
};
