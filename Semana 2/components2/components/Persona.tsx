import { View, Text } from 'react-native'
import React from 'react'

export default function Persona({ nombre, apellido }: any) {
    return (
        <View>
            <Text>Saludo {nombre} - {apellido}</Text>
        </View>
    )
}