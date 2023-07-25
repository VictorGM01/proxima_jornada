describe("Testes de integração da API de destinos", () => {
  test("Valida o statusCode do GET de destinos", async () => {
    const axios = require("axios");
    const resposta = await axios("http://localhost:3000/destinos");
    expect(resposta.status).toEqual(200);
  });

  test("Valida o statusCode do GET de um destino", async () => {
    const axios = require("axios");
    const resposta = await axios("http://localhost:3000/destinos/64be884ee8b8bf5597404c9c");
    expect(resposta.status).toEqual(200);
  });

  test("Valida o statusCode do GET de uma busca", async () => {
    const axios = require("axios");
    const resposta = await axios("http://localhost:3000/destinos?nome=Paris");
    expect(resposta.status).toEqual(200);
  });

  test("Valida o statusCode do POST de um destino", async () => {
    const axios = require("axios");
    const resposta = await axios.post("http://localhost:3000/destinos",
      {
        foto1: "url.teste.com",
        foto2: "url.2.teste.com",
        nome: "Moscou",
        meta: "Moscou é a capital da russia.",
        preco: 3000
      }
    )
      .then((resposta) => {
        return resposta;
      });
    
    expect(resposta.status).toEqual(201);
  });

  test("Valida o statusCode do PUT de um destino", async () => {
    const axios = require("axios");
    const resposta = await axios.put("http://localhost:3000/destinos/64be884ee8b8bf5597404c9c",
      {
        preco: 4500
      }
    )
      .then((resposta) => {
        return resposta;
      });
    
    expect(resposta.status).toEqual(204);
  });

  test("Valida o statusCode do DELETE de um destino", async () => {
    const axios = require("axios");
    const resposta = await axios.delete("http://localhost:3000/destinos/64bfc7dcbe75b07d3c83e8e4");
    expect(resposta.status).toEqual(204);
  });
});