import depoimentos from "../models/Depoimento.js";

class depoimentoController {
  // por meio do método find, o mongoose busca todos os dados da coleção depoimentos
  static async obterDepoimentos(req, res) {
    try{
      const resultado = await depoimentos.find();

      res.status(200).json(resultado);
    } catch(erro){
      console.log(erro);
    }
  }

  // por meio do método findById, o mongoose busca um dado específico da coleção depoimentos
  static async obterDepoimento(req, res) {
    try {
      const idBuscado = req.params.id;

      const resultado = await depoimentos.findById(idBuscado);

      res.status(200).json(resultado);
    } catch (erro) {
      console.log(erro);
    }
  }

  // por meio do método save, o mongoose salva um novo dado na coleção depoimentos
  static async cadastrarDepoimento(req, res) {
    try {
      const depoimento = new depoimentos(req.body);
      const resultado = await depoimento.save();
      res.status(201).json(resultado);
    } catch (erro) {
      console.log(erro);
    } 
  }

  static async atualizarDepoimento(req, res) {
    try {
      const idBuscado = req.params.id;
      const dados = req.body;

      const resultado = await depoimentos.findByIdAndUpdate(idBuscado, dados);

      res.status(204).json(resultado);
    } catch (erro) {
      console.log(erro);
    }
  }
}

export default depoimentoController;