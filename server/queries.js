const Pool = require('pg').Pool
const configDB = require('./configDB')
const pool = new Pool(configDB)

exports.getUsers = (request, response) => {
  pool.query('SELECT * FROM users.test ORDER BY user_id ASC', (error, results) => {
    if (error) {
      throw error
    }
    
    response.status(200).json(results.rows)
  })
}

exports.getUserById = (request, response) => {
  
  const user_id = request.params.id

  pool.query('SELECT * FROM users.test WHERE user_id = $1', [user_id], (error, results) => {
    if (error) {
      throw error
    }
    console.log(results)
    response.status(200).json(results.rows)
  })
}

exports.createUser = (request, response) => {
  const { shared, email, user_id } = request.body
  pool.query('INSERT INTO users.test VALUES ($1, $2, $3)', [email, shared, user_id ], (error, results) => {
    if (error) {
      throw error
    }

    response.status(201).send(`User added with ID: ${results.insertId}`)
  })
}

exports.updateUser = (request, response) => {
  const user_id = parseInt(request.params.id)
  const { shared, email } = request.body

  pool.query(
    'UPDATE users.test SET shared = $1, email = $2 WHERE user_id = $3',
    [shared, email, user_id],
    (error, results) => {
      if (error) {
        throw error
      }
      response.status(200).send(`User modified with ID: ${user_id}`)
    }
  )
}

exports.deleteUser = (request, response) => {
  const user_id = parseInt(request.params.id)

  pool.query('DELETE FROM users.test WHERE user_id = $1', [user_id], (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).send(`User deleted with ID: ${user_id}`)
  })
}