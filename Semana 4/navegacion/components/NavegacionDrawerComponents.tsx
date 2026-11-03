import { View, Text } from 'react-native'
import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer';
import Home from '../pages/Home';
import ListaTareas from '../pages/ListaTareas';
import Tareas from '../pages/Tareas';
import { NavigationContainer } from '@react-navigation/native';

export default function NavegacionDrawerComponents() {

    const drawer = createDrawerNavigator();
    return (

        <NavigationContainer>
            <drawer.Navigator>
                <drawer.Screen name="Home" component={Home} />
                <drawer.Screen name="ListaTareas" component={ListaTareas} />
                <drawer.Screen name="Tareas" component={Tareas} />
            </drawer.Navigator>
        </NavigationContainer>
    )
}
