let mongoose = require("mongoose");

const workoutSchema = new mongoose.Schema ({
    day: {
        type: Date,
        default: () => new Date()
    },
    exercises: [
        {
            type: {
                type: String,
                trim: true,
                required: "Please enter type of Exercise"
            },
            name: {
                type: String,
                trim: true,
                required: "Please enter the name of the Exercise"
            },
            duration:{
                type: Number,
                required: "How long do you want to Exercise"
            },
            weight:{
                type: Number,
                required: "Enter Weight"
            },
            reps:{
                type: Number,
                required: "Enter Reps"
            },
            sets:{
                type: Number,
                required: "Enter Sets"
            },
            distance:{
                type: Number,
                required: "Enter Distance"
            },
        }
    ]
},{toJSON:{virtuals:true}})      

// workoutSchema.virtual("totalDuration").get(() => {
//     return this.exercises.reduce((total, exercise) => {
//         return total+exercise.duration
//     }, 0)
// })


const Workout = mongoose.model("Workout",workoutSchema)
module.exports = Workout
