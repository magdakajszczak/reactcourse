const router = require('express').Router()
const service = require('./service')

router.get('/', getAllUsers)
router.post('/', createUser)

module.exports = router

function getAllUsers(_request, response) {
  response.json(service.getAllUsers())
}

function createUser(request, response) {
  const user = request.body

  const addedUser = service.createUser(user)

  response.json(addedUser)
}
