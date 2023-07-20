import express from "express";
import depoimentoController from "../controllers/depoimentosControllers.js";

const router = express.Router();

router
  .get("/depoimentos", depoimentoController.obterDepoimentos)
  .get("/depoimentos/:id", depoimentoController.obterDepoimento)
  .post("/depoimentos", depoimentoController.cadastrarDepoimento)
  .put("/depoimentos/:id", depoimentoController.atualizarDepoimento);

export default router;