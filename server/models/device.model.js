const mongoose = require("mongoose");

const DeviceSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, "Devices must have a name"],
            minlength: [3, "Names must be at least 3 characters"],
            unique: true,
        },
        address: {
            type: String,
            required: [true, "Devices must have an address"],
            minlength: [
                3,
                "There are no Devices types that have less than 2 letters.",
            ],
        },
        key: {
            type: String,
        },
        description: {
            type: String,
            required: [true, "Devices must have a description"],
            minlength: [3, "Descriptions must be at least 3 characters"],
        },
    },
    { timestamps: true }
);

module.exports.Device = mongoose.model("Device", DeviceSchema);
