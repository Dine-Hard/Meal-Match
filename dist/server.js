const path = require("path");
const express = require("express");
const cors = require("cors");
const apiRouter = require("./routes/api");
const port = 3000;

const app = express();

// handle parsing request body
app.use(express.json());
app.use(express.urlencoded({extended:true}))

const corsOptions = {
  origin: 'http://localhost:8080',
  optionSuccessStatus:200
}
app.use(cors(corsOptions));
// handle requests for static files
app.use("/", express.static(path.join(__dirname, "../src/index.html")));

app.use('/api', apiRouter)

// define route handlers
// app.get("/", (req, res) => {
//   // Render the poll/vote page
//   // You can send the poll options and other necessary data to the front-end here
//   res.status(200).sendFile(path.join(__dirname, "../src/index.html")); // make the correct path
// });

// app.post("/vote", (req, res) => {
//   const { cuisine } = req.body;

//   // Process the vote and update the poll results accordingly
//   // You can store the votes in a database or any other data storage mechanism

//   res.status(200).json({ message: "Voted for " + cuisine });
// });

// catch-all route handler for any requests to an unknown route
app.use((req, res) =>
  res.status(404).send("404 - Page Not Found")
);

app.use((err, req, res, next) => {
  const defaultErr = {
    log: "Express error handler caught unknown middleware error",
    status: 500,
    message: { err: "An error occurred" },
  };
  const errorObj = Object.assign({}, defaultErr, err);
  console.log(errorObj.log);
  return res.status(errorObj.status).json(errorObj.message);
});

// start server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
//added export
module.exports = app;
