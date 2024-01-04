// Import any necessary modules or dependencies
const express = require('express');
const bodyParser = require('body-parser');
const db = require('../Models/Models');


// Create a controller object
const controller = {};

controller.getCuisines = async (req, res, next) => {
    try {
        // const result = await db.query('SELECT user_id FROM users')
        const text = `SELECT cuisine FROM cuisines`;
        const result = await db.query(text);
        res.locals.cuisines = result.rows;
        console.log(res.locals.cuisines)
        return next();
    } catch (err) {
        console.log('error occurred in getCuisines');
        return next(err);
    } 
}

controller.addCuisines = async (req, res, next) => {
    const { cuisine } = req.body;
    try {
        const text = `INSERT INTO cuisines (cuisine) VALUES ($1)`
        const params = [ cuisine ]
        await db.query(text, params);
        res.locals.addedCuisines = 'Successfully added'
        return next();
    } catch(err) {
        console.log('error in addCuisines');
        return next(err)
    }
}

controller.getPeople = async (req,res,next) => {
    try {
        const text = `SELECT * FROM users`;
        const result = await db.query(text);
        res.locals.people = result.rows;
        return next();
    } catch(err) {
        console.log('error on getPeople middleware');
        return next(err);
    }
}

controller.addPeople = async (req, res, next) => {
    const { name } = req.body;
    // console.log(name)
    try {
     const text = `INSERT INTO users (name) VALUES ($1)`
     const params = [ name ];
     await db.query(text, params);
     res.locals.addPeople = 'Successfully added Person'   
     return next();
    } catch (err) {
        console.log('error in addPeople middleware');
        return next(err)
    }
}

controller.tally = async (req, res, next) => {
    try {
        const text = 'SELECT cuisine, COUNT (cuisine) FROM cuisines GROUP BY cuisine'
        const result = await db.query(text);
        res.locals.tally = result.rows;
        console.log(result.rows);
        return next();
    } catch(err) {
        console.log('error in tally middleware');
        return next(err);
    }
}




// Define your controller methods
controller.methodName = (req, res) => {
  // Code logic goes here
};

// Export the controller object
module.exports = controller;
