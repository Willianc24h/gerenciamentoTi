import cadastroModel from "../model/cadastroModel.js";

const validateRequestBody = (fields, body) => {
  const missingFields = fields.filter((field) => !body[field]);
  if (missingFields.length > 0) {
    return `Campos obrigatórios ausentes: ${missingFields.join(", ")}`;
  }
  return null;
};

const indexController = (app) => {
  app.get("/", async (req, res) => {
    try {
      const indexes = await cadastroModel.find();
      res.status(200).json(indexes);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  });

  app.get("/:tag", async (req, res) => {
    const { tag } = req.params;
    try {
      const index = await cadastroModel.findOne({ tag });
      if (!index) {
        return res.status(404).json({ message: "Cadastro não encontrado" });
      }
      res.status(200).json(index);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  });

  app.post("/", async (req, res) => {
    const requiredFields = ["setor", "tag", "dataDeEntrada", "dataDeSaida", "tipo"];
    const validationError = validateRequestBody(requiredFields, req.body);

    if (validationError) {
      return res.status(422).json({ message: validationError });
    }

    const { tag } = req.body;

    try {
      const existingTag = await cadastroModel.findOne({ tag });
      if (existingTag) {
        return res.status(409).json({ message: "Tag já existe" });
      }

      const newIndex = await cadastroModel.create(req.body);
      res.status(201).json({ message: "Cadastro criado com sucesso", data: newIndex });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  });

  app.patch("/:tag", async (req, res) => {
    const { tag } = req.params;
    const updateData = req.body;

    try {
      const updateResult = await cadastroModel.updateOne({ tag }, updateData);

      if (updateResult.matchedCount === 0) {
        return res.status(404).json({ message: "Cadastro não encontrado" });
      }

      if (updateResult.modifiedCount === 0) {
        return res.status(200).json({ message: "Nenhuma modificação realizada" });
      }

      res.status(200).json({ message: "Cadastro atualizado com sucesso" });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  });

  app.delete("/:tag", async (req, res) => {
    const { tag } = req.params;

    try {
      const deleteResult = await cadastroModel.deleteOne({ tag });

      if (deleteResult.deletedCount === 0) {
        return res.status(404).json({ message: "Cadastro não encontrado" });
      }

      res.status(200).json({ message: "Cadastro removido com sucesso" });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  });
};

export default indexController;
