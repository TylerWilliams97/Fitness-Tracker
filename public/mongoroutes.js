const app = require("express").Router()
const Workout = require("../models/workoutschema")

app.post("/api/workouts", (req,res) => {
    Workout.create({})
    .then((dbWorkout)=> {res.json(dbWorkout)})
    .catch((err)=>{res.json(err)})
})
app.put("/api/workouts/:id", ({body,params},res) =>{
    Workout.findByIdAndUpdate(
        params.id,{$push:{exercises:body}}
    )
    .then((dbWorkout)=> {res.json(dbWorkout)})
    .catch((err)=>{res.json(err)})
})
app.get("/api/workouts", (req,res) => {
    Workout.aggregate([{
        $addFields:{totalDuration:{$sum:"$exercises.duration"}}
    }])
    .then((dbWorkouts)=> {res.json(dbWorkouts)})
    .catch((err)=>{res.json(err)})
})
app.get("/api/workouts/range", (req,res) => {
    Workout.aggregate([{
        $addFields:{totalDuration:{$sum:"$exercises.duration"}}
    }]).sort({_id: -1})
    .limit(5)
    .then((dbWorkouts)=> {res.json(dbWorkouts)})
    .catch((err)=>{res.json(err)})
})



module.exports = app