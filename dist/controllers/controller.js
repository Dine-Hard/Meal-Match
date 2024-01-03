// Import any necessary modules or dependencies
const express = require('express');
const bodyParser = require('body-parser');
const db = require('../Models/Models');


// Create a controller object
const controller = {};

controller.getCuisines = async (req, res, next) => {
    const { user_id, name } = req.body
    try {
        // const result = await db.query('SELECT user_id FROM users')
        const text = `INSERT INTO users (user_id, name) VALUES ($1, $2)`
        const params = [ user_id, name ]
        const result = await db.query(text, params);
        res.locals.cuisines = result.rows[0];
        // console.log(res.locals.cuisines)
        return next();
    } catch (err) {
        console.log('error here');
        return next(err);
    } 
}

// Define your controller methods
controller.methodName = (req, res) => {
  // Code logic goes here
};

// Export the controller object
module.exports = controller;
