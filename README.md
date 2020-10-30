# workout-tracker

Link to application:  
https://mysterious-basin-13178.herokuapp.com/

Link to GitHub repository:  
https://github.com/git99-src/workout-tracker  


## Description 
The Fitness Tracker application allows the user to track daily workouts. The user will be able add the name, type, weight, sets, reps, and duration of each exercise included in the workout as well as update the exercises. Additionally, a workout dashboard is included showing the results of the workouts for the week.

## Table of Contents 
  * [Installation](#installation)
  * [Screens](#usage)
  * [Development](#development)
  * [License](#license)
  * [Contributing](#contributing)
  * [Env](#env)

## Installation

If you are interested in installing and using the project, you can do so by forking the GitHub repository and cloning it to your machine.  

To use the app, simply follow the provided Heroku link.  

## Usage

This screen is the home screen.  This presents the user with a summary of their last workout. They can decide to continue with the workout or start a new one.
![Last Workout Summary](public/images/workimg_01.PNG) 

The user is presented with this screen after choosing to Continue Workout or New Workout. This is where the user can add an exercise and related information to the exercise based on the type of workout - cardio or resistance.
![Last Workout Summary](public/images/workimg_02.PNG) 


This the workout dashboard presented to the user which gives a summary of the weekly workouts.  The user can navigate to this screen by clicking on "Dashboard" in the upper left of any screen.
![Workout Dashboard](public/images/workimg_03.PNG) 

To use the app, simply follow the provided Heroku link at the link above. 

## Development 

The application was made by Al Pineda and uses Bootstrap as a CSS framework. The program used to write the application is VS Code. It was developed using MongoDb and Mongoose to create and design the schema. The app uses the following programming languages:    

* Back End:
   * Node.js
   * Mongoose
   * Express


* Front End: 
   * HTML
   * CSS
   * JavaScript/JQuery  

The app also uses various npm packages to run: 
* dotenv
* express
* mongoose
* morgan


The app is deployed on Heroku and uses MongoDB as a database on Heroku.  

## License
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT) MIT License  

## Contributing
Please fork the repository in Github with permission.  

## Env
This app uses dotenv.  Requires a ".env" file created in root.
--
**MONGODB_URI** = locationofdatabase
 
--
---