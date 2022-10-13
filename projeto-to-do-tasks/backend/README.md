# Projeto To-Do App - Backend

Projeto para cadastro de usuários e tasks utilizando serviços backend.

## O que foi usado?
- Bcrypt (criptografia de senha)
- Body-Parser (criar um parse com base na requisição)
- Consign (carregador das funcionalidades)
- Express (serviço baseado em JS)
- Knex
- Moment (para horários)
- Jwt
- Passport (credenciais)

## Algumas coisas vistas
- (req, res, next) são importantes. Referentes a (req)uest, (res)olve e next (próximo)
- Parâmetros vindos da URL vem do (req)uest `req.params.valor` com :
- Para mais de um parâmetro, usa Query String `req.query.nome`, sendo representado por ? e &
- Migration: módulo do Node que consiste em uma sequência de chamadas para que consiga construir o banco de dados
- Consign associa as informações dentro do Index. Espera que a chamada seja apenas uma função
- ExtractJwt: extrai da requisição as autorizações e tokens

## Como executar?
- É necessário ter as dependências instaladas `npm i`
- Necessário ter o Postgres instalado

### Para o Backend
- Acessar o terminal na pasta backend e digitar `npm start`, apenas.

### Para o Postgres
- Digitar o comando `cmd.exe /c chcp 1252`
- Criar um banco de dados (fiz com nome **tasks**): `createdb -U tasks`
- Criar um usuário (utilizei como nome **postgres**): `CREATE USER postgres`
- Logar: `psql -U postgres`
- Após, conectar ao banco de dados (ou database): `\c {NOME DO BANCO}`
