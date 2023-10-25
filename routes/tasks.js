const router = require("express").Router();
const taskController = require("../controllers/taskController");

router.route("/tasks").post(taskController.create);

module.exports = router;
