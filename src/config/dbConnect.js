import "dotenv/config";
import mongoose from "mongoose";

// Lê a string de conexão do arquivo .env
const stringDeConexao = process.env.STRING_CONEXAO_DB;

// Conecta com o banco de dados a partir da string de conexão
mongoose.connect(stringDeConexao);

// Salva a conexão na variável db
let db = mongoose.connection;

// Exporta a conexão para ser usada em outros arquivos
export default db;