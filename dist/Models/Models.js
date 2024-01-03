// Import the required module
const { Pool } = require("pg");

// Define the connection string for the PostgreSQL database
const PG_URI =
  "postgres://doqfzoya:VBhP0zbtKheTnrSOJLXghwM530ey18zg@mahmud.db.elephantsql.com/doqfzoya";

// Create a new instance of the Pool class with the connection string
const pool = new Pool({
  connectionString: PG_URI,
});

// Export the pool object to be used in other modules
module.exports = {
  query: (text, params, callback) => {
    console.log("Executed query:", text);
    // Fix the syntax error by defining query as a function
    return pool.query(text, params, callback);
  },
};
