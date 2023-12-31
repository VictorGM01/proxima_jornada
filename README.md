# Próxima Jornada 🛫
![Capa](https://github.com/VictorGM01/proxima_jornada/assets/86068797/c3363b1a-47c9-428c-9f60-370b9c5a0ef2)

<p align="center">
 <a href="#descrição-do-projeto-">Descrição</a> •
 <a href="#estrutura-de-pastas-%EF%B8%8F">Pastas</a> •
 <a href="#funcionalidades-%EF%B8%8F">Funcionalidades</a> •
 <a href="#status-do-projeto-">Status</a> •
 <a href="#como-rodar-a-aplicação-%EF%B8%8F">Rodar</a> •
 <a href="#como-rodar-os-testes-%EF%B8%8F">Testes</a> •
 <a href="#desenvolvedor-octocat">Desenvolvedor</a>
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

## Como rodar a aplicação ▶️

```bash
# Clone este repositório
$ git clone https://github.com/VictorGM01/proxima_jornada.git

# Acesse a pasta do projeto no terminal/cmd
$ cd proxima_jornada

# Instale as dependências
$ npm install

# Crie um arquivo .env na raíz do projeto e preencha as variáveis de ambiente, sobretudo a STRING_CONEXAO_DB, com a string de conexão do seu banco de dados MongoDB

# Execute a aplicação em modo de desenvolvimento
$ npm run dev

# O servidor inciará na porta:3000 - acesse <http://localhost:3000>
```

## Como rodar os testes ▶️

```bash
# Clone este repositório
$ git clone https://github.com/VictorGM01/proxima_jornada.git

# Acesse a pasta do projeto no terminal/cmd
$ cd proxima_jornada

# Instale as dependências
$ npm install

# Crie um arquivo .env na raíz do projeto e preencha as variáveis de ambiente, sobretudo a STRING_CONEXAO_DB, com a string de conexão do seu banco de dados MongoDB

# Execute a aplicação em modo de teste
$ npm run test
```

## Desenvolvedor :octocat:
[<img src="https://avatars.githubusercontent.com/u/86068797?s=400&u=043c0b1479770ac997f0cf5a31c986a2815ce810&v=4" width=100><br><sub> <strong>Victor G. Marques</strong> </sub>](https://github.com/VictorGM01)

[![Linkedin Badge](https://img.shields.io/badge/-LinkedIn-blue?style=flat-square&logo=Linkedin&logoColor=white&link=https://www.linkedin.com/in/victor-gabriel-marques/)](https://www.linkedin.com/in/victor-gabriel-marques/)
[![Gmail Badge](https://img.shields.io/badge/-Gmail-red?style=flat-square&logo=Gmail&logoColor=white&link=https://www.linkedin.com/in/victor-marques-profile)](mailto:victormarques8801@gmail.com")

Feito com ❤️ por Victor Marques 🖥️🔬
