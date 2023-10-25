const router = require("express").Router();
const tasksRouter = require("./tasks");

router
  .route("/")
  .get((req, res) => res.status(200).json({ message: "Olá, Erick!" }));

router.use("/", tasksRouter);

module.exports = router;
