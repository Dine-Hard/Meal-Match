const express = require("express");

const controller = require("../dist/controllers/controller.js");

const router = express.Router();

router.get('/', controller.getCuisines, (req, res) => {
    res.status(200).json(res.locals);
});
