# Projeto de Usuários

Sistema CRUD básico para simulação de usuários em uma plataforma. Permite criar, visualizar, atualizar e deletar um perfil criado.

## O que foi usado
- Expo
- React Native
- Context API
- React Native Elements
- React Navigation

## Como usar?
- Acesse um terminal e clone o repositório com `git clone <link>`
- Após, já na pasta, digite `npm start` e leia o QR Code no telefone
- Importante ter baixado o Expo na loja de aplicativos de preferência

### Context API
- Compartilha informações dentro de uma árvore de componentes, sem necessidade de compartilhar entre componentes separados
- Cria-se um contexto inicialmente vazio
- Cria um Provider acima de todos os campos de navegação em Initial.js
- Dentro dele, cria-se um provider que recebe uma lista de elementos (children)
- Dentro de `UserList.js`, acessamos os valores compartilhados através de userContext
- Também aplicamos os conceitos de Dispatch e Reducer