const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");
const path = require("path");

const PORT = process.env.PORT || 3000;

const db = require("./models");

const app = express();

app.use(logger("dev"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout", { useNewUrlParser: true });

// Requiring our routes
require("./routes/html-routes.js")(app);
require("./routes/api-routes.js")(app);

// routes here:
// html routes
// app.get("/exercise",function (req,res){   
//     res.sendFile(path.join(__dirname, '../public', 'index1.html'));
// });

// app.get("/",function(req,res){    
//     res.sendFile(path.join(__dirname,"../public/index.html"));
// });

// // app.get("/stats",function(req,res){   
// //     res.sendFile(path.join(__dirname,"../public/stats.html"));
// // });
// // api routes

// app.get("/api/workouts", function(req, res) {
//     db.Workout.find({})
//       .then(dbWorkout => {
//         res.json(dbWorkout);
//       })
//       .catch(err => {
//         res.json(err);
//       });
//   });

//   app.put("/api/workouts/:id", function({body, params}, res) {
//     db.Workout.findByIdAndUpdate(
//       params.id,
//       { $push: { exercises: body } },
//       { new: true }
//     )
//       .then(dbWorkout => {
//         res.json(dbWorkout);
//       })
//       .catch(err => {
//         res.json(err);
//       });
//   });

//   app.post("/api/workouts", (req, res) => {
//     db.Workout.create({})
//       .then(dbWorkout => {
//         res.json(dbWorkout);
//       })
//       .catch(err => {
//         res.json(err);
//       });
//   });

//   app.get("/api/workouts/range", function(req, res) {
//     db.Workout.find({}).limit(5)
//       .then(dbWorkout => {
//         res.json(dbWorkout);
//       })
//       .catch(err => {
//         res.json(err);
//       });
//   });

// Start the server
app.listen(PORT, () => {
    console.log(`App running on port ${PORT}!`);
});
