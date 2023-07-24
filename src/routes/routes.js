import express from "express";
import depoimentos from "./depoimentosRoutes.js";
import destinos from "./destinosRoutes.js";

const routes = (app) => {
  app.route("/").get((req, res) => res.send("Hello World!"));

  app.use(
    express.json(),
    depoimentos,
    destinos
  );
};

export default routes;