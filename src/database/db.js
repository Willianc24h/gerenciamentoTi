import mongoose from 'mongoose';

const cadastroDatabase = async () => {
  try {
    console.log('Aguarde, conectando ao banco de dados...');
    
    // Desativa strictQuery para compatibilidade com versões antigas
    mongoose.set('strictQuery', false);
    
    // Conexão com o banco de dados
    await mongoose.connect(
      'mongodb+srv://tecnologia:Ss70945358.@gerenciamento.qxt07.mongodb.net/?retryWrites=true&w=majority&appName=gerenciamento');
    
    console.log('Banco de dados conectado com sucesso!');
  } catch (error) {
    console.error('Erro ao conectar ao banco de dados:', error.message);
  }
};

export default cadastroDatabase;