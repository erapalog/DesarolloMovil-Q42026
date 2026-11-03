import { View, Text } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../pages/Home';
import ListaTareas from '../pages/ListaTareas';
import Tareas from '../pages/Tareas';
import { NavigationContainer } from '@react-navigation/native';


export default function NavegacionComponents() {

    const tab = createBottomTabNavigator();


    return (

        <NavigationContainer>
            <tab.Navigator>

                <tab.Screen name="Home" component={Home} />

                <tab.Screen name="Tareas" component={Tareas} />
                <tab.Screen name="ListaTareas" component={ListaTareas} />
            </tab.Navigator>
        </NavigationContainer>

    )
}
