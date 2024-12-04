import mongoose from 'mongoose'

const clienteDatabase = ()=>{
    console.log("Aguarde, servidor conectando com o banco de dados")
    mongoose.set('strictQuery',false);
    mongoose.connect(
        "mongodb+srv://tecnologia:Ss70945358.@gerenciamento.qxt07.mongodb.net/?retryWrites=true&w=majority&appName=gerenciamento"
        )
    .then(()=>{
        console.log("Banco de dados conectado com sucesso")
    }).catch(()=>{
        console.log("Não foi possivel conectar com o banco de dados");
    })
}

export default clienteDatabase