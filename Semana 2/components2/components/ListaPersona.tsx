import { View, Text } from 'react-native'
import React from 'react'
import { Persona } from '../modelos/Persona'

export default function ListaPersona(persona: Persona) {
    return (
        <View>
            <Text>Id {persona.id}</Text>
            <Text>Nombre {persona.nombre}</Text>
            <Text>Apellido {persona.apellido}</Text>
            <Text>Edad {persona.edad}</Text>
            <Text>FEcha Nacimineto {persona.fechaNacimient}</Text>
        </View>
    )
}