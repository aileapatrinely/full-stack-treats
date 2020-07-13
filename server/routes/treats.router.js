const router = require('express').Router();
const pool = require('../modules/pool');

// GET /treats
router.get('/', (req, res) => {
  const queryText = `SELECT * FROM "treats";`;
  pool
    .query(queryText)
    .then((dbResponse) => {
      console.log(dbResponse);
      res.send(dbResponse.rows);
    })
    .catch((err) => {
      console.log('GET errror:', err);
      res.sendStatus(500);
    });
});
// POST /treats

// PUT /treats/<id>

// DELETE /treats/<id>

module.exports = router;
