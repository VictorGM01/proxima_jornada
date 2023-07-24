import destinos from "../models/Destino.js";

class destinoController {
  // por meio do método find, o mongoose busca todos os dados da coleção destinos
  static async obterDestinos(req, res) {
    try {
      const resultado = await destinos.find();

      res.status(200).json(resultado);
    } catch (erro) {
      console.log(erro);
    }
  }

  // por meio do método findById, o mongoose busca um dado específico da coleção destinos
  static async obterDestino(req, res) {
    try {
      const idBuscado = req.params.id;
      const resultado = await destinos.findById(idBuscado);

      res.status(200).json(resultado);
    } catch (erro) {
      console.log(erro);
    }
  }

  // por meio do método save, o mongoose salva um novo dado na coleção destinos
  static async cadastrarDestino(req, res) {
    try {
      const destino = new destinos(req.body);
      const resultado = await destino.save();

      res.status(201).json(resultado);
    } catch (erro) {
      console.log(erro);
    }
  }

  // por meio do método findByIdAndUpdate, o mongoose busca e atualiza um dado específico da coleção destinos
  static async atualizarDestino(req, res) {
    try {
      const idBuscado = req.params.id;
      const dados = req.body;
      await destinos.findByIdAndUpdate(idBuscado, dados);

      res.status(204).end();
    } catch (erro) {
      console.log(erro);
    }
  }

  // por meio do método findByIdAndDelete, o mongoose busca e deleta um dado específico da coleção destinos
  static async deletarDestino(req, res) {
    try {
      const idBuscado = req.params.id;
      await destinos.findByIdAndDelete(idBuscado);

      res.status(204).end();
    } catch (erro) {
      console.log(erro);
    }
  }
}

export default destinoController;