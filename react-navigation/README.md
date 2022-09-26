# Estudos sobre React Navigation

## O que foi usado?
- React Navigation (versão do Expo)
- Stack
- Drawer
- Tab

## Dos atributos
### Gerais
- navigationContainer: necessário para a renderização das rotas

### Stack (`<Stack...>`)
- BASE: `import { createStackNavigator } from '@react-navigation/stack'`
- `<Stack.Navigator>`: initialRoutes: aponta o name para início da rotas.
- Ainda, permite através do `screenOptions` as estilizações como `headerShown`
- `props.navigation.navigate()` permite navegar para a tela seguinte, com botão já incluso. Equivalente: `push()`
- `props.navigation.goBack()` retorna para a página anterior

- Diferença `push` x `navigate`: Navigate não adiciona tela se tentar navegar e já estiver na pilha; já no Push, adiciona quantas vezes for necessário.

#### Em `<Stack.Screen>`
- name: Define o título do componente
- component: define o componente, tendo que ser criado
- options: permite alterar títulos, dentre outros

### Tab
- BASE: `import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'`
- Tem o `tabBarOptions=({})` para estilização
- Em `<Tab.Navigator>` existe a mesma regra do `initialRouteName`
- Ademais, o `<Tab.Screen>` adora as mesmas propriedades do `<Stack.Screen>`

### Drawer
- BASE: `import { createDrawerNavigator } from '@react-navigation/drawer'`
- `onDrawer()` abre o Drawer e `closeDrawer()` fecha