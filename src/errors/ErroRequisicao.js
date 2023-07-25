import ErroBase from "./Erro.js";

class RequisicaoIncorreta extends ErroBase {
  constructor() {
    super(400, "Um ou mais dados fornecidos estão incorretos.");
  }
}

export default RequisicaoIncorreta;