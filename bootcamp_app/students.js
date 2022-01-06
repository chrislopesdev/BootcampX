const { Pool } = require('pg');

const pool = new Pool({
  user: 'vagrant',
  password: '123',
  host: 'localhost',
  database: 'bootcampx',
  port: '5432',
});

// shows connection to database
pool.connect().then(() => {
  console.log('We have connected to the database.');
}).catch((err) => {
  console.log('Error: ', err);
});

// pool.query is a function that accepts an SQL query as a JavaScript string
// pool.query(`
// SELECT students.id, students.name AS student, cohorts.name AS cohort
// FROM students
// JOIN cohorts ON cohorts.id = cohort_id
// LIMIT 5;
// `)
//   .then((res) => {
//     console.log(res.rows); // returns a array of javascript object
//   })
//   .catch((err) => console.error('query error', err.stack));

pool.query(`
SELECT students.id as student_id, students.name as name, cohorts.name as cohort
FROM students
JOIN cohorts ON cohorts.id = cohort_id
WHERE cohorts.name LIKE '%${process.argv[2]}%'
LIMIT ${process.argv[3] || 5};
`)
  .then((res) => {
    res.rows.forEach((user) => {
      console.log(`${user.name} has an id of ${user.student_id} and was in the ${user.cohort} cohort`);
    });
  }).catch((err) => console.error('query error', err.stack));
