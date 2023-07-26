import destinos from "../models/Destino.js";
import NaoEncontrado from "../errors/Erro404.js";

class destinoController {
  // por meio do método find, o mongoose busca todos os dados da coleção destinos
  static async obterDestinos(req, res, next) {
    try {

      // verifica se há busca na requisicao
      let nomeDestino = req.query.nome;
      nomeDestino = new RegExp(nomeDestino, "i");

      // se houver busca, filtra os destinos pelo nome
      if (nomeDestino) {
        const resultadoFiltrado = await destinos.find({nome: nomeDestino})
          .select("nome foto preco");

        // verifica se o resultado da busca é vazio
        if (resultadoFiltrado.length === 0) {
          next(new NaoEncontrado("Nenhum destino foi encontrado."));
          return;
        }
        res.status(200).json(resultadoFiltrado);
      } else {
        const resultado = await destinos.find();
        res.status(200).json(resultado);
      }
    } catch (erro) {
      next(erro);
    }
  }

  // por meio do método findById, o mongoose busca um dado específico da coleção destinos
  static async obterDestino(req, res, next) {
    try {
      const idBuscado = req.params.id;
      const resultado = await destinos.findById(idBuscado);

      if(resultado !== null){
        res.status(200).json(resultado);
      } else {
        next(new NaoEncontrado("Destino não encontrado."));
      }
    } catch (erro) {
      next(erro);
    }
  }

  // por meio do método save, o mongoose salva um novo dado na coleção destinos
  static async cadastrarDestino(req, res, next) {
    try {
      const destino = new destinos(req.body);
      const resultado = await destino.save();

      res.status(201).json(resultado);
    } catch (erro) {
      next(erro);
    }
  }

  // por meio do método findByIdAndUpdate, o mongoose busca e atualiza um dado específico da coleção destinos
  static async atualizarDestino(req, res, next) {
    try {
      const idBuscado = req.params.id;
      const dados = req.body;
      await destinos.findByIdAndUpdate(idBuscado, dados);

      res.status(204).end();
    } catch (erro) {
      next(erro);
    }
  }

  // por meio do método findByIdAndDelete, o mongoose busca e deleta um dado específico da coleção destinos
  static async deletarDestino(req, res, next) {
    try {
      const idBuscado = req.params.id;
      await destinos.findByIdAndDelete(idBuscado);

      res.status(204).end();
    } catch (erro) {
      next(erro);
    }
  }
}

export default destinoController;