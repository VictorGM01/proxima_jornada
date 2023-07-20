import express from "express";
import db from "./config/dbConnect.js";
import bodyParser from "body-parser";

// ------------------ Banco de Dados ------------------
// Verifica se houve algum erro na conexão com o banco de dados
db.on("error", console.error.bind(console, "Erro de conexão com o banco de dados."));
// Inicia a conexão com o banco de dados
db.once("open", () => {
  console.log("Conexão com o banco de dados estabelecida com sucesso.");
});
// ------------------ Banco de Dados ------------------


// ------------------  Body Parser  -------------------
// Configura o body parser para receber corpos de requisição em JSON
app.use(bodyParser.json());
// Configura o body parser para receber corpos de requisição em URL Encoded
app.use(bodyParser.urlencoded({ extended: true}));
// ------------------  Body Parser  -------------------

const app = express();
app.use(express.json());

// Exporta o app para ser usado em server.js
export default app;