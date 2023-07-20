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
      const idBuscado = req.query.idDepoimento;

      const resultado = await depoimentos.findById(idBuscado);

      res.status(200).json(resultado);
    } catch (erro) {
      console.log(erro);
    }
  }
}

export default depoimentoController;