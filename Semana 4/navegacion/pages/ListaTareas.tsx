import { View, Text, FlatList, StyleSheet } from 'react-native'
import React from 'react'
import { useContextTarea } from '../Providers/TareaProviders'

export default function ListaTareas() {

    const { tarea } = useContextTarea()
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Lista Tareas</Text>

            <FlatList
                style={styles.task}

                data={tarea}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => (

                    <View>
                        <Text>Id Tarea {item.id}</Text>
                        <Text>Titulo {item.titulo}</Text>
                        <Text>Descripcion {item.descripcion}</Text>
                        <Text>Estado {item.estado}</Text>
                    </View>
                )}
            ></FlatList>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
        alignItems: 'center'
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        margin: 5
    },
    task: {
        fontSize: 15,
        padding: 1,
        borderBottomColor: 'red',
        borderColor: 'red',
        width: 100
    }

})