const router = require("express").Router();
const users = require("../users/controller");

router.use("/users", users);

module.exports = router;