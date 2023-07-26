import depoimentos from "../models/Depoimento.js";
import NaoEncontrado from "../errors/Erro404.js";

class depoimentoController {
  // por meio do método find, o mongoose busca todos os dados da coleção depoimentos
  static async obterDepoimentos(req, res, next) {
    try{
      const resultado = await depoimentos.find();

      res.status(200).json(resultado);
    } catch(erro){
      next(erro);
    }
  }

  // por meio do método findById, o mongoose busca um dado específico da coleção depoimentos
  static async obterDepoimento(req, res, next) {
    try {
      const idBuscado = req.params.id;

      const resultado = await depoimentos.findById(idBuscado);

      if(resultado !== null){
        res.status(200).json(resultado);
      } else {
        next(new NaoEncontrado("Depoimento não encontrado."));
      }
    } catch (erro) {
      next(erro);
    }
  }

  // por meio do método countDocuments, o mongoose conta quantos dados existem na coleção depoimentos
  // em seguida, o método skip pula um número aleatório de documentos
  // por fim, o método findOne busca um dado específico da coleção depoimentos
  // esse processo é repetido três vezes para obter três depoimentos aleatórios 
  static async obterTresDepoimentos(req, res, next) {
    try{
      // Conta quantos depoimentos existem na coleção
      const resultado = await depoimentos.countDocuments();

      // Cria um conjunto para armazenar os índices selecionados
      const indexesAleatorios = new Set();

      // Gera 3 índices aleatórios únicos
      while (indexesAleatorios.size < 3) {
        const randomIndex = Math.floor(Math.random() * resultado);
        indexesAleatorios.add(randomIndex);
      }

      // Transforma o conjunto de índices em um array para usar na consulta
      const listaIndexesAleatorios = Array.from(indexesAleatorios);

      // Busca os três depoimentos aleatórios
      const depoimento1 = await depoimentos.findOne().skip(listaIndexesAleatorios[0]);
      const depoimento2 = await depoimentos.findOne().skip(listaIndexesAleatorios[1]);
      const depoimento3 = await depoimentos.findOne().skip(listaIndexesAleatorios[2]);

      // Retorna os três depoimentos
      res.status(200).json([depoimento1, depoimento2, depoimento3]);
    } catch(erro){
      next(erro);
    }
  }

  // por meio do método save, o mongoose salva um novo dado na coleção depoimentos
  static async cadastrarDepoimento(req, res, next) {
    try {
      const depoimento = new depoimentos(req.body);
      const resultado = await depoimento.save();
      res.status(201).json(resultado);
    } catch (erro) {
      next(erro);
    } 
  }

  // por meio do método findByIdAndUpdate, o mongoose busca e atualiza um dado específico da coleção depoimentos
  static async atualizarDepoimento(req, res, next) {
    try {
      const idBuscado = req.params.id;
      const dados = req.body;

      await depoimentos.findByIdAndUpdate(idBuscado, dados);

      res.status(204).end();
    } catch (erro) {
      next(erro);
    }
  }

  // por meio do método findByIdAndDelete, o mongoose busca e deleta um dado específico da coleção depoimentos
  static async deletarDepoimento(req, res, next) {
    try {
      const idBuscado = req.params.id;

      await depoimentos.findByIdAndDelete(idBuscado);
      
      res.status(204).end();
    } catch (erro) {
      next(erro);
    }
  }
}

export default depoimentoController;