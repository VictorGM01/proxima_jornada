import RequisicaoIncorreta from "./ErroRequisicao.js";

class ErroValidacao extends RequisicaoIncorreta{
  constructor(erro) {
    // itera por todos os erros de validação e salva na constante
    const mensagensErro = Object.values(erro.errors)
      .map(erro => erro.message)
      .join("; ");

    super(`Os seguintes erros foram encontrados: ${mensagensErro}`);
  }
}

export default ErroValidacao;