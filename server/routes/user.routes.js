const userController = require("../controllers/user.controller");

module.exports = function (app) {
    app.post("/api/user", userController.create);
    app.get("/api/user", userController.index);
    app.get("/api/user/:id", userController.show);
    app.put("/api/user/:id", userController.update);
    app.delete("/api/user/:id", userController.destroy);
};
