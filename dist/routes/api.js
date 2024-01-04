const express = require("express");
const controller = require("../controllers/controller");
const router = express.Router();

router.post('/', controller.getCuisines, (req, res) => {
    res.status(200).json(res.locals.cuisines);
});

module.exports = router;