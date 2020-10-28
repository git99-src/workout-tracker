// workout model

const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const WorkoutSchema = new Schema({
    day: {
        type: Date,
    },
    exercises: [
        {
            type: {
                type: String,
                trim: true,
                required: "Exercise type is Required"
            },
            name: {
                type: String,
                trim: true,
                required: "Exercise name is Required"
            },
            duration: {
                type: Number,
            },
            weight: {
                type: Number,
            },
            reps: {
                type: Number,
            },
            sets: {
                type: Number,
            },
            distance: {
                type: Number,
            },
        },
    ],
});


// This creates our model from the above schema, using mongoose's model method
const User = mongoose.model("Workout", WorkoutSchema);

// Export the workout model
module.exports = Workout;