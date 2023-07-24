import express from "express";
import destinoController from "../controllers/destinosControllers.js";

const router = express.Router();

router
  .get("/destinos", destinoController.obterDestinos)
  .get("/destinos/:id", destinoController.obterDestino)
  .post("/destinos", destinoController.cadastrarDestino)
  .put("/destinos/:id", destinoController.atualizarDestino)
  .delete("/destinos/:id", destinoController.deletarDestino);

export default router;