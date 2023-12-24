// Import the required module
const { Pool } = require("pg");

// Define the connection string for the PostgreSQL database
const PG_URI =
  "postgres://govugcll:MbIDghe3yII_jK7lbLMN-Ro-xx4dOuu6@mahmud.db.elephantsql.com/govugcll";

// Create a new instance of the Pool class with the connection string
const pool = new Pool({
  connectionString: PG_URI,
});

// Export the pool object to be used in other modules
module.exports = {
  query: (text, params, callback) => {
    // Fix the syntax error by defining query as a function
    return pool.query(text, params, callback);
  },
};
