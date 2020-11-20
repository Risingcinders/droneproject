const { User } = require("../models/auth.model.js");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken")

module.exports = {
    register: (req, res) => {
        User.create(req.body)
            .then((user) => {
                console.log(user);
                const userToken = jwt.sign(
                    {
                        id: user._id,
                    },
                    process.env.SECRET_JWT_KEY
                );
                console.log("token", userToken)

                res.cookie("usertoken", userToken, {
                    httpOnly: true,
                    secure:false,//change to true once HTTPS
                    maxAge: 60*60*1000 //1 hour
                }).json({ msg: "success!", user: user });
            })
            .catch((err) => res.json(err));
    },

    login: async (req, res) => {
        const user = await User.findOne({ userName: req.body.userName });

        if (user === null) {
            // email not found in users collection
            // Probably rebuild this
            console.log(req.body)
            console.log("bad user")
            return res.json({errors: {login: "Invalid Login"}});
        }

        const correctPassword = await bcrypt.compare(
            req.body.password,
            user.password
        );

        if (!correctPassword) {
            // password wasn't a match!
            // Probably rebuild this
            console.log("bad pass")
            return res.json({errors: {login: "Invalid Login"}});
        }

        const userToken = jwt.sign(
            {
                id: user._id,
            },
            process.env.SECRET_JWT_KEY
        );

        res.cookie("usertoken", userToken, {
            httpOnly: true,
            secure:false,//change to true once HTTPS
            maxAge: 60*60*1000 //1 hour
        }).json({ msg: "success!" });
    },

    logout: (req, res) => {
        res.clearCookie('usertoken');
        res.json({msg: "Logged Out"})
    }
};
