const { Pet } = require("../models/user.model.js");

module.exports = {
    index: (req, res) => {
        Pet.find({}).sort({type : 1})
            .then((a) => res.json({results : a}))
            .catch((err) => res.json(err));
    },
    show: (req, res) => {
        Pet.findOne({ _id: req.params.id })
            .then((a) => res.json({results : a}))
            .catch((err) => res.json(err));
    },
    create: (req, res) => {
        Pet.create(req.body)
            .then((a) => res.json({results : a}))
            .catch(
                (err) => res.json(err));
    },
    update: (req, res) => {
        Pet.findOneAndUpdate({ _id: req.params.id }, req.body, {
            runValidators: true, useFindAndModify:false
        })
            .then((a) => res.json({results : a}))
            .catch((err) => res.json(err));
    },
    destroy: (req, res) => {
        Pet.deleteOne({ _id: req.params.id })
            .then((a) => res.json({results : a}))
            .catch((err) => res.json(err.errors));
    },
};
