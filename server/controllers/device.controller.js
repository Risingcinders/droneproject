const { Device } = require("../models/device.model.js");

module.exports = {
    index: (req, res) => {
        Device.find({}).sort({type : 1})
            .then((a) => res.json({results : a}))
            .catch((err) => res.json(err));
    },
    show: (req, res) => {
        Device.findOne({ _id: req.params.id })
            .then((a) => res.json({results : a}))
            .catch((err) => res.json(err));
    },
    create: (req, res) => {
        Device.create(req.body)
            .then((a) => res.json({results : a}))
            .catch(
                (err) => res.json(err));
    },
    update: (req, res) => {
        Device.findOneAndUpdate({ _id: req.params.id }, req.body, {
            runValidators: true, useFindAndModify:false
        })
            .then((a) => res.json({results : a}))
            .catch((err) => res.json(err));
    },
    destroy: (req, res) => {
        Device.deleteOne({ _id: req.params.id })
            .then((a) => res.json({results : a}))
            .catch((err) => res.json(err.errors));
    },
};
