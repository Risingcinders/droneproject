const mongoose = require("mongoose");

const PetSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, "Pets must have a name"],
            minlength: [3, "Names must be at least 3 characters"],
            unique: true,
        },
        type: {
            type: String,
            required: [true, "Pets must have a type"],
            minlength: [
                3,
                "There are no pets types that have less than 2 letters.",
            ],
        },
        description: {
            type: String,
            required: [true, "Pets must have a description"],
            minlength: [3, "Descriptions must be at least 3 characters"],
        },
        skills: {
            type: Array,
            minlength: [0, "Pets can be unskilled workers"],
            maxlength: [3, "Pets cannot be too skilled"],
        },
        likes : {
            type : Number
        }
    },
    { timestamps: true }
);

module.exports.Pet = mongoose.model("Pet", PetSchema);
