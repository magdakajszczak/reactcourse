const userList = []

module.exports = {
  getAllUsers,
  createUser
}

function getAllUsers() {
  return userList
}

function createUser(user) {
	userList.push(user);

	return user;
}
