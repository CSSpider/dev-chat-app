const { Pool } = require('pg');

// require dotENV
// require('dotenv').config();

const PG_URI = require(process.env.URI)
console.log(process.env.URI)

const pool = new Pool({
  connectionString: PG_URI,
});

module.exports = {
  query: (text, params, callback) => {
    // console.log('executed query', text);
    return pool.query(text, params, callback);
  },
};
