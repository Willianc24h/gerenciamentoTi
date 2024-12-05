import mongoose from "mongoose";

// Definição do esquema (Schema) para o cadastro
const cadastroSchema = new mongoose.Schema({
  setor: { type: String, required: true },
  tag: { type: String, required: true },
  dataDeEntrada: { type: Date, required: true },
  dataDeSaida: { type: Date },
  tipo: { type: String, required: true },
  NFE: { type: String }
});

// Modelo baseado no esquema
const CadastroModel = mongoose.model('Cadastro', cadastroSchema);

export default CadastroModel;