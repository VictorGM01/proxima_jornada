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
      const destino = new destino(req.body);
      const resultado = await destino.save();

      res.status(201).json(resultado);
    } catch (erro) {
      console.log(erro);
    }
  }
}

export default destinoController;