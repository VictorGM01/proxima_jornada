import mongoose from "mongoose";
import ErroBase from "../errors/Erro.js";
import RequisicaoIncorreta from "../errors/ErroRequisicao.js";
import ErroValidacao from "../errors/ErroValidacao.js";

// eslint-disable-next-line no-unused-vars
function manipuladorDeErros(erro, req, res, next) {
  if(erro instanceof mongoose.Error.CastError) {
    // status 400 com mensagem de erro informando que um ou mais dados estão incorretos
    new RequisicaoIncorreta().enviarResposta(res);
  } else if(erro instanceof mongoose.Error.ValidationError) {
    new ErroValidacao(erro).enviarResposta(res);
  } else { 
    new ErroBase().enviarResposta(res);
  }
}

export default manipuladorDeErros;