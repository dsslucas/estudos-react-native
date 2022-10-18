import React from "react";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import Icon from 'react-native-vector-icons/FontAwesome'
import { NavigationContainer } from '@react-navigation/native'
import Feed from './screens/Feed'

const Tabs = createBottomTabNavigator();

function MyTabs() {
    return (
        <NavigationContainer>
            <Tabs.Navigator
                screenOptions={({ route }) => ({
                    tabBarIcon: ({ color }) => {
                        let iconName;
                        if (route.name === 'Feed') iconName = "home"
                        else if (route.name === 'Camera') iconName = "camera"
                        else if (route.name === 'Profile') iconName = "user"

                        return <Icon name={iconName} size={30} color={color} />
                    },
                    tabBarActiveTintColor: 'blue',
                    tabBarInactiveTintColor: 'gray',
                    tabBarShowLabel: false,
                    headerShown: false                    
                })}
            >
                <Tabs.Screen name="Feed" component={Feed} />
                <Tabs.Screen name="Camera" component={Feed} />
                <Tabs.Screen name="Profile" component={Feed} />
            </Tabs.Navigator>
        </NavigationContainer>
    )
}

export default MyTabs

// // Rotas
// const MenuRoutes = {
//     Feed: {
//         name: 'Feed',
//         screen: Feed,
//         navigationOptions: {
//             title: 'Feed',
//             tabBarIcon: ({ tintColor }) => <Icon name="home" size={30} color={tintColor} />
//         }
//     },
//     Add: {
//         name: 'AddPhoto',
//         screen: Feed,
//         navigationOptions: {
//             title: 'Add Picture',
//             tabBarIcon: ({ tintColor }) => <Icon name='camera' size={30} color={tintColor} />
//         }
//     },
//     Profile: {
//         name: 'Profile',
//         screen: Feed,
//         navigationOptions: {
//             title: 'Profile',
//             tabBarIcon: ({ tintColor: color }) => <Icon name='user' size={30} color={color} />
//         }
//     }
// }

// const MenuConfig = {
//     initialRouteName: 'Feed',
//     tabBarOptions: {
//         showLabel: false, // Mostra apenas os ícones
//     }
// }

// const MenuNavigator = createAppContainer(createBottomTabNavigator(MenuRoutes, MenuConfig))

// export default MenuNavigator

