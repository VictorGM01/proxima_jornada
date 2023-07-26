describe("Testes de integração da API de depoimentos", () => {
  test("valida o statusCode do GET de depoimentos", async () => {
    const axios = require("axios");
    const resposta = await axios("http://localhost:3000/depoimentos");
    expect(resposta.status).toEqual(200);
  });
  
  test("valida o statusCode do GET de um depoimento", async () => {
    const axios = require("axios");
    try {
      const resposta = await axios("http://localhost:3000/depoimentos/64b94bb4ff26018973bbd315");
      expect(resposta.status).toEqual(200);
    } catch (erro) {
      expect(erro.response.status).toEqual(404);
      expect(erro.response.data).toEqual({ mensagem: "Depoimento não encontrado." });
    }
  });
  
  test("valida o statusCode do GET de três depoimentos randômicos", async () => {
    const axios = require("axios");
    const resposta = await axios("http://localhost:3000/depoimentos-home");
    expect(resposta.status).toEqual(200);
  });
  
  test("valida o statusCode do POST de depoimento", async () => {
    const axios = require("axios");
    const resposta = await axios.post(
      "http://localhost:3000/depoimentos",
      {
        foto: "url.teste.com",
        depoimento: "não gostuei, asmei este lugar!",
        nome: "davi"
      })
      .then((resposta) => {
        return resposta;
      });
  
    expect(resposta.status).toEqual(201);
  });
  
  test("valida o statusCode do PUT de depoimento", async () => {
    const axios = require("axios");
    const resposta = await axios.put(
      "http://localhost:3000/depoimentos/64ba9d00a9ca2ca86689b09d",
      {
        nome: "davizão"
      })
      .then((resposta) => {
        return resposta;
      });
  
    expect(resposta.status).toEqual(204);
  });
  
  test("valida o statusCode do DELETE de um depoimento", async () => {
    const axios = require("axios");
    const resposta = await axios.delete("http://localhost:3000/depoimentos/64ba9d83cc96d1729ae21254");
    expect(resposta.status).toEqual(204);
  });
});