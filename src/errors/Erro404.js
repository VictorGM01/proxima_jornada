import ErroBase from "./Erro.js";

class NaoEncontrado extends ErroBase{
  constructor(mensagem = "Página não encontrada"){
    super(404, mensagem);
  }
}

export default NaoEncontrado;