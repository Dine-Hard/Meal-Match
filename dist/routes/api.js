const express = require("express");
const controller = require("../controllers/controller");
const router = express.Router();

//tests if frontend is connected to backend
// router.post('/cuisines', (req, res) => {
//     console.log('Received request body:', req.body);
//     res.json({ message: 'Request received successfully' });
//   });

router.post('/', controller.getCuisines, (req, res) => {
    res.status(200).json(res.locals.cuisines);
});

router.get('/cuisines', controller.getCuisines, (req, res) => {
    res.status(200).json(res.locals.cuisines)
})

router.post('/cuisines', controller.addCuisines, (req, res) => {
    res.status(200).json(res.locals.addedCuisines)
})

router.get('/people', controller.getPeople, (req, res) => {
    res.status(200).json(res.locals.people)
})

router.post('/people', controller.addPeople, (req, res) => {
    res.status(200).json(res.locals.addPeople)
})

module.exports = router;