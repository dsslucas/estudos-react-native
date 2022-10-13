# Projeto To-Do App - React Native

Projeto emulado via Expo.

## O que foi visto
- Flatlist habilita o scroll na tela!
- Não foi feito a instalação de módulos para iOs.
- Declarar função como Arrow Function livra o desenvolvedor de usar this.XXXXXXX
- `DateTimePicker` pega as datas (como se fosse um Input). Funciona para ambos, mas fica melhor renderizado em iOs. Em Android, é preciso alterar algumas coisas.
- `Swipeable` não funciona tão bem no Android quanto no iOs. Precisará mexer em algumas coisas no código nativo

### Módulos para iOs
- Acesse a pasta `ios`
- Digite no terminal `pod install`
- Pode haver falhas no build

## Observações
- Expo não cria um index na pasta. Para a navegação, foi necessário mexer em node_modules/expo/AppEntry.js e apontar para o arquivo de Navegação. Apenas importei e está tudo funcionando.
- Em `common.js` existe a conexão do backend com o frontend, com IPs setados LOCALMENTE. É necessário realizar a alteração de acordo com o IP da máquina.