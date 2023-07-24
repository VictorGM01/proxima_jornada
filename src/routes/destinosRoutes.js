import express from "express";
import depoimentosController from "../controllers/depoimentosControllers.js";

const router = express.Router();

router
  .get("/destinos", depoimentosController.obterDepoimentos)
  .get("/destinos/:id", depoimentosController.obterDepoimento)
  .post("/destinos", depoimentosController.cadastrarDepoimento)
  .put("/destinos/:id", depoimentosController.atualizarDepoimento)
  .delete("/destinos/:id", depoimentosController.deletarDepoimento);

export default router;