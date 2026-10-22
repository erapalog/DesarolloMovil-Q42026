import { View, Text, Button, Alert } from 'react-native'
import React from 'react'

export default function ButtonComponent({ nombre, apellido }: any) {
    return (
        <View>

            <Button title='Dar Clik' onPress={() => Alert.alert(nombre, apellido)}></Button>
        </View>
    )
}