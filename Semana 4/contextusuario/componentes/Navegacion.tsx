import { View, Text } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { NavigationContainer } from '@react-navigation/native'
import Home from '../pages/Home'
import ListaUsuario from '../pages/ListaUsuario'

export default function Navegacion() {

    const tab = createBottomTabNavigator()

    return (
        <NavigationContainer>
            <tab.Navigator>
                <tab.Screen component={Home} name='Home'></tab.Screen>
                <tab.Screen component={ListaUsuario} name='Lista Usuario'></tab.Screen>
            </tab.Navigator>
        </NavigationContainer>
    )
}