# Próxima Jornada 🛫
![Capa](https://github.com/VictorGM01/proxima_jornada/assets/86068797/c3363b1a-47c9-428c-9f60-370b9c5a0ef2)

<p align="center">
 <a href="#descrição-do-projeto-">Descrição</a> •
 <a href="#estrutura-de-pastas-%EF%B8%8F">Pastas</a>
</p>

## Descrição do Projeto 📋
Esta é uma API desenvolvida em JavaScript, especialmente com Node e Express, para disponibilizar informações e recursos do banco de dados MongoDB relacionados a possíveis destinos de viagem, exibindo fotos e um texto chamativo que instiga o usuário a querer visitar aquele destino.

<div align="center">
    <img alt="Badge com a logo JavaScript" src="https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E"/>
    <img alt="Badge com a logo Node" src="https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white"/>
    <img alt="Badge com a logo Node" src="https://img.shields.io/badge/Express.js-404D59?style=for-the-badge"/>
    <img alt="Badge com a logo Node" src="https://img.shields.io/badge/Jest-323330?style=for-the-badge&logo=Jest&logoColor=white"/>
    <img alt="Badge com a logo Node" src="https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white"/>
</div>

## Estrutura de Pastas 🗂️
* Raíz

    ├── src <br>
        &emsp;&emsp; └── config <br>
        &emsp;&emsp; └── controllers <br>
        &emsp;&emsp; └── errors <br>
        &emsp;&emsp; └── middlewares <br>
        &emsp;&emsp; └── models <br>
        &emsp;&emsp; └── routes <br>
    ├── tests <br>

Na pasta src, há todo o código da API, incluindo a conexão com o banco de dados (na pasta config), os controladores, as classes de erros, os middlewares para manipular o lançamento de erros e paginação, os modelos e as rotas dos endpoints.

Já na pasta tests há dois arquivos: depoimentos.test.js, o qual possui todos os testes de integração relacionados à API de depoimentos, e destinos.test.js, o qual possui todos os testes de integração relacionados à API de destinos.

## Funcionalidades ⚙️

- [x] Cadastrar um novo destino
- [x] Editar um destino
- [x] Excluir um destino
- [x] Listar todos os destinos
- [x] Listar um destino específico
- [x] Cadastrar um novo depoimento
- [x] Editar um depoimento
- [x] Excluir um depoimento
- [x] Listar todos os depoimentos
- [x] Listar um depoimento específico
- [x] Listar 3 depoimentos aleatórios
- [x] Lançar erros personalizados

## Status do Projeto 🔔

✅ Concluído ✅