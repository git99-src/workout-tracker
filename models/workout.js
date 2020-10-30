// workout model

const mongoose = require("mongoose");

// const Schema = new mongoose.Schema;
// mongoose.schema.types.mixed.

const workoutSchema = new mongoose.Schema({
    day: {
        type: Date,
        default: Date.now()
    },
    exercises: [
        {
            type: {
                type: String,
                enum: ["cardio", "resistance"],
                required: "exercise type is Required"
            },
            name: {
                type: String,
                trim: true,
                required: "exercise name is Required"
            },
            duration: {
                type: Number
            },
            weight: {
                type: Number
            },
            reps: {
                type: Number
            },
            sets: {
                type: Number
            },
            distance: {
                type: Number
            }
        }
    ]

});


// This creates our model from the above schema, using mongoose's model method
const Workout = mongoose.model("Workout", workoutSchema);

// Export the workout model
module.exports = Workout;   



