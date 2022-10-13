import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack'
import AuthScreen from "./screens/Auth";
import HomeScreen from './screens/Home';
import TaskList from './screens/TaskList';

const Stack = createStackNavigator()

const Navigator = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName='Auth' screenOptions={{ headerShown: false }}>
                <Stack.Screen name="Auth" component={AuthScreen} />
                <Stack.Screen name="Home" component={HomeScreen} />
                <Stack.Screen name="TaskList" component={TaskList} />
            </Stack.Navigator>

        </NavigationContainer>
    )
}

export default Navigator;