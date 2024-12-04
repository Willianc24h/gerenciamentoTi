import mongoose from "mongoose";

const indexModel = mongoose.model('index' , {
    nomeOperador: String,
    operacao: String,
    tag: String,
    dataDeEntrega: String,
    tipo: String,
    NFE: String,
})

export default indexModel;

    