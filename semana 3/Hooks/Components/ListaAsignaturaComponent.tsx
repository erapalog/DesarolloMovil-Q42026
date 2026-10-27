import { View, Text, FlatList } from 'react-native'
import React from 'react'
import { ListaAsignatura } from '../Modelos/ListaAsignatura'

export default function ListaAsignaturaComponent(props: ListaAsignatura) {
    return (
        <View>
            <FlatList

                data={props.lista}
                keyExtractor={item => item.id.toString()}
                renderItem={({ item }) => (
                    <View>
                        <Text>Nombre Asignatura {item.nombre}</Text>
                        <Text>Unidades Valorativas Asignatura {item.unidadesValorativas}</Text>
                    </View>
                )}

            >

            </FlatList>
        </View>
    )
}