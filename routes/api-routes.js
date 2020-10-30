const path = require("path");
const db = require("../models");

module.exports = function (app) {

    app.get("/api/workouts", (req, res) => {
        db.Workout.find({})
            .then(dbWorkout => {
                res.json(dbWorkout);
            })
            .catch(err => {
                console.log(err);
                res.status(400).send("Unable to find workout");
            });
    });

    app.get("/api/workouts/range", (req, res) => {
        db.Workout.find({})
            .then(dbWorkout => {
                res.json(dbWorkout);
            })
            .catch(err => {
                console.log(err);
                res.status(400).send("Unable to find workouts");
            });
    });

    app.post("/api/workouts", ({ body }, res) => {
        db.Workout.create(body)
            .then(dbWorkout => {
                res.json(dbWorkout);
            })
            .catch(err => {
                console.log(err);
                res.status(400).send("Unable to create workout");
            });
    });

    app.put("/api/workouts/:id", ( req, res ) => {
        db.Workout.findByIdAndUpdate(
            {_id: (req.params.id)},
            { $push: { exercises: req.body } },
            { new: true }
        )
            .then(dbWorkout => {
                res.json(dbWorkout);
            })
            .catch(err => {
                console.log(err);
                res.status(400).send("Unable to find workout");
            });
    });

}