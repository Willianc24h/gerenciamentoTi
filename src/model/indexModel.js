import mongoose from "mongoose";

const indexModel = mongoose.model('index' , {
    nomeOperador: String,
    operacao: String,
    tag: Number,
    dataDeEntrega: Date,
    tipo: String,
    NFE: Number,
})

export default indexModel;