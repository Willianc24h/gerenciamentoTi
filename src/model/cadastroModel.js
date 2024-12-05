import mongoose from "mongoose";

const cadastroModel = mongoose.model('index' , {
    setor: String,
    tag: String,
    dataDeEntrada: Date,
    dataDeSaida: Date,
    tipo: String,
    NFE: String,
})

export default cadastroModel;