import React from "react";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { createSwitchNavigator } from 'react-navigation';
import Icon from 'react-native-vector-icons/FontAwesome'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import Feed from './screens/Feed'
import AddPhoto from "./screens/AddPhoto";
import Profile from './screens/Profile'
import Login from "./screens/Login";
import Register from "./screens/Register";
//const Tabs = createBottomTabNavigator();

const AppNavigator = () => {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName={Login}>
            <Stack.Screen name="Profile" component={Profile} />
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="Register" component={Register} />            
        </Stack.Navigator>
    );
};

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator()
const menuConfig = {
    labelStyle: {
        // fontFamily: commonStyles.fontFamily,

        fontWeight: 'normal',
        fontSize: 15
    },
    activeTintColor: '#080',
    showLabel: true,
    headerShown: false
}

const MenuRoutes = props => {

    return (
        <Tab.Navigator initialRouteName="Feed" screenOptions={menuConfig}   >
            <Tab.Screen
                name="Feed"
                component={Feed}

                options={{
                    tabBarIcon: () => (
                        <Icon name="home" size={30} />
                    ),
                }}
            />
            <Tab.Screen
                name="AddPicture"
                component={AddPhoto}

                options={{
                    tabBarLabel: 'Add Picture',
                    tabBarIcon: () => (
                        <Icon name="camera" size={30} />
                    ),
                }}
            />
            <Tab.Screen
                name="Profile"
                component={AppNavigator}
                options={
                    {
                        tabBarLabel: 'Profile',
                        tabBarIcon: () => (
                            <Icon name="user" size={30} />
                        ),
                    }}>
            </Tab.Screen>
        </Tab.Navigator>
    );
};
const Navigator = () => {
    return (
        <NavigationContainer >
            <MenuRoutes />
        </NavigationContainer>
    );
};
export default Navigator


// function MyTabs() {
//     return (
//         <NavigationContainer>
//             <Tabs.Navigator
//                 screenOptions={({ route }) => ({
//                     tabBarIcon: ({ color }) => {
//                         let iconName;
//                         if (route.name === 'Feed') iconName = "home"
//                         else if (route.name === 'Camera') iconName = "camera"
//                         else if (route.name === 'Profile') iconName = "user"

//                         return <Icon name={iconName} size={30} color={color} />
//                     },
//                     tabBarActiveTintColor: 'blue',
//                     tabBarInactiveTintColor: 'gray',
//                     tabBarShowLabel: false,
//                     headerShown: false
//                 })}
//             >
//                 <Tabs.Screen name="Feed" component={Feed} />
//                 <Tabs.Screen name="Camera" component={AddPhoto} />
//                 <Tabs.Screen name="Profile" component={Profile} />
//             </Tabs.Navigator>
//         </NavigationContainer>
//     )
// }

// export default MyTabs

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

