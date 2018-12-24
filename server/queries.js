const Pool = require('pg').Pool
const pool = new Pool({
  user: 'me',
  host: 'localhost',
  database: 'aviasales',
  password: 'password',
  port: 5432,
})

exports.getUsers = (request, response) => {
  pool.query('SELECT * FROM users.test ORDER BY id ASC', (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).json(results.rows)
  })
}

exports.getUserById = (request, response) => {
  const id = parseInt(request.params.id)

  pool.query('SELECT * FROM users.test WHERE id = $1', [id], (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).json(results.rows)
  })
}

exports.createUser = (request, response) => {
  const { shared, email } = request.body

  pool.query('INSERT INTO users.test VALUES ($1, $2)', [email, shared ], (error, results) => {
    if (error) {
      throw error
    }
    console.log(results)
    response.status(201).send(`User added with ID: ${results.insertId}`)
  })
}

exports.updateUser = (request, response) => {
  const id = parseInt(request.params.id)
  const { shared, email } = request.body

  pool.query(
    'UPDATE users.test SET shared = $1, email = $2 WHERE id = $3',
    [shared, email, id],
    (error, results) => {
      if (error) {
        throw error
      }
      response.status(200).send(`User modified with ID: ${id}`)
    }
  )
}

exports.deleteUser = (request, response) => {
  const id = parseInt(request.params.id)

  pool.query('DELETE FROM users.test WHERE id = $1', [id], (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).send(`User deleted with ID: ${id}`)
  })
}