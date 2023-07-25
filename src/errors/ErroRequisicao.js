import ErroBase from "./Erro.js";

class RequisicaoIncorreta extends ErroBase {
  constructor(mensagem = "Um ou mais dados fornecidos estão incorretos.") {
    super(400, mensagem);
  }
}

export default RequisicaoIncorreta;