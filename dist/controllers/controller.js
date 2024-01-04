// Import any necessary modules or dependencies
const express = require('express');
const bodyParser = require('body-parser');
const db = require('../dist/Models/Models.js');


// Create a controller object
const controller = {};

// controller.getCusines = async (req, res, next) => {
//     try {
//         res.locals = await db.query('SELECT Cuisine FROM Cuisines')
//     } catch (err) {
//         console.log('error here');
//         return next(err);
//     } finally {
//         next();
//     }
// }

//testing if data gets inserted into db
controller.addUser = (req, res, next) => {
    const text =
        'INSERT INTO user (name)'
        'VALUES ($1) RETURNING *';
    const values = [

    ]
}

controller.addCuisine = (req, res, next) => {
    const text =
        'INSERT INTO cuisines (cuisine)'
        'VALUES ($1) RETURNING *';
    const values = [

    ]
}
// Define your controller methods
controller.methodName = (req, res) => {
  // Code logic goes here
};

// Export the controller object
module.exports = controller;
