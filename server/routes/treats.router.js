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
      console.log('GET err:', err);
      res.sendStatus(500);
    });
});
// POST /treats
router.post('/', (req, res) => {
  const newTreat = req.body;
  const queryText = `INSERT INTO "treats" 
    ("name", "description", "pic")
    VALUES ($1, $2, $3);`;
  pool
    .query(queryText, [newTreat.name, newTreat.description, newTreat.pic])
    .then((dbResponse) => {
      console.log(dbResponse);
      res.sendStatus(201);
    })
    .catch((err) => {
      console.log('POST err:', err);
      res.sendStatus(500);
    });
});
// PUT /treats/<id>

// DELETE /treats/<id>

module.exports = router;
