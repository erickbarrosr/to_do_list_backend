const Task = require("../models/Task");

const taskController = {
  create: async (req, res) => {
    try {
      const { title, description, author } = req.body;

      if (!title) {
        return res.status(422).json({ message: "Título obrigatório." });
      }

      if (!description) {
        return res.status(422).json({ message: "Descrição obrigatória." });
      }

      if (!author) {
        return res.status(422).json({ message: "Digite o nome do autor." });
      }

      const task = {
        title,
        description,
        author,
      };

      const createdTask = await Task.create(task);

      res
        .status(201)
        .json({ createdTask, message: "Tarefa criada com sucesso!" });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Erro interno do servidor." });
    }
  },
};

module.exports = taskController;
