import express from "express";
import depoimentos from "./depoimentosRoutes.js";

const routes = (app) => {
  app.route("/").get((req, res) => res.send("Hello World!"));

  app.use(
    express.json(),
    depoimentos
  );
};

export default routes;