import React from 'react'
import { ImageBackground, Platform, SafeAreaView, StatusBar, StyleSheet, Text, TouchableOpacity } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack'

// import commonStyles from '../commonStyles'
import AuthScreen from "./screens/Auth";
import HomeScreen from './screens/Home';
import TaskList from './screens/TaskList';
import Auth from './screens/Auth';

// Imagens
// import Month from '../../assets/imgs/month.jpg'
// import Today from '../../assets/imgs/today.jpg'
// import Tomorrow from '../../assets/imgs/tomorrow.jpg'
// import Week from '../../assets/imgs/week.jpg'
// import Login from '../../assets/imgs/login.jpg'

// Menu inicial, que abrirá as opções do To-do
const Stack = createStackNavigator()

// Menu inicial, que abrirá as opções do To-do
const MenuNavigator = props => {
    return (
        <Stack.Navigator MenuNavigator={HomeScreen}>
            <Stack.Screen name="Today" options={{ title: 'Hoje' }}>
                {props => <TaskList {...props} title='Hoje' daysAhead={0} />}
            </Stack.Screen>
            <Stack.Screen name="Tomorrow" options={{ title: 'Amanhã' }}>
                {props => <TaskList {...props} title='Amanhã' daysAhead={1} />}
            </Stack.Screen>
            <Stack.Screen name="Week" options={{ title: 'Semana' }}>
                {props => <TaskList {...props} title='Semana' daysAhead={7} />}
            </Stack.Screen>
            <Stack.Screen name="Month" options={{ title: 'Mês' }}>
                {props => <TaskList {...props} title='Mês' daysAhead={30} />}
            </Stack.Screen>
        </Stack.Navigator>
    )
}

const Navigator = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName='Auth' screenOptions={{ headerShown: false }}>
                <Stack.Screen name="Auth" component={Auth} />
                <Stack.Screen name="Home" component={HomeScreen}>
                </Stack.Screen>
                <Stack.Screen name="TaskList" component={TaskList} />
            </Stack.Navigator>

        </NavigationContainer>
    )
}

export default Navigator;