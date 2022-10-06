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

## Comandos
- `cmd.exe /c chcp 1252` para entrar no Postgres
- `\c {NOME DO BANCO}` conecta no banco