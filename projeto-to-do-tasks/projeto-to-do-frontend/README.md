# Projeto To-Do App - React Native

Projeto emulado via Expo.

## O que foi usado?
- React Native
- Moment (para datas)
- Expo (e seus derivados)
- Axios
- React Navigation (adaptado para o Expo)

## O que foi visto
- Flatlist habilita o scroll na tela!
- Não foi feito a instalação de módulos para iOs.
- Declarar função como Arrow Function livra o desenvolvedor de usar this.XXXXXXX
- `DateTimePicker` pega as datas (como se fosse um Input). Funciona para ambos, mas fica melhor renderizado em iOs. Em Android, é preciso alterar algumas coisas.
- `Swipeable` não funciona tão bem no Android quanto no iOs. Precisará mexer em algumas coisas no código nativo

## Melhorias
- Navegação Stack com as opções de período, não proposto pelo projeto original. Infelizmente o Drawer não funciona bem para o Expo.
- Correção de dias para cada período (amanhã, dias da semana, mês)

## Resultado final
![Login e Cadastro](/projeto-to-do-tasks/projeto-to-do-frontend/assets/screenshot/sign%20in%20e%20login.jpg)

![Home](/projeto-to-do-tasks/projeto-to-do-frontend/assets/screenshot/home.jpeg)

![Tasks](/projeto-to-do-tasks/projeto-to-do-frontend/assets/screenshot/tasks.jpg)

![Cadastro de uma tarefa](/projeto-to-do-tasks/projeto-to-do-frontend/assets/screenshot/newtask.jpeg)

## Observações
- Utilizei o Expo para Android, em um Motorola Moto G8 Plus.
- Expo não cria um index na pasta. Para a navegação, foi necessário mexer em node_modules/expo/AppEntry.js e apontar para o arquivo de Navegação. Apenas importei e está tudo funcionando.
- Em `common.js` existe a conexão do backend com o frontend, com IPs setados LOCALMENTE. É necessário realizar a alteração de acordo com o IP da máquina.
- Pode ser necessário realizar alterações para emulação deste projeto dentro do Android Studio, uma vez que foi desenvolvido para o Expo.

