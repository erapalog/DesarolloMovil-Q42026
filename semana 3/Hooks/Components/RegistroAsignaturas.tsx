import { View, Text, TextInput, Button, Alert } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Asignaturas } from '../Modelos/Asignaturas'
import ListaAsignaturaComponent from './ListaAsignaturaComponent';

export default function RegistroAsignaturas() {

    const [listaAsignatura, setListaAsignatura] = useState<Asignaturas[]>([]);

    const [nombre, setNombre] = useState<string>('')
    const [unidadesValorativas, setUnidadesValorativas] = useState<string>('')

    function guardarAsignatura() {
        let asignatura: Asignaturas = {
            id: listaAsignatura.length + 1,
            nombre: nombre,
            unidadesValorativas: parseInt(unidadesValorativas)
        }

        // listaAsignatura.push(asignatura)
        setListaAsignatura([...listaAsignatura, asignatura]);
        Alert.alert("Asignatura guardada")
        console.log('Desde el evento', listaAsignatura)
    }


    useEffect(() => {
        console.log('Desde el Hook UseEffect', listaAsignatura)
    }, [listaAsignatura])


    return (
        <View>
            <Text>Almacenar Asignaturas</Text>

            <TextInput placeholder='Ingrese Nombre Asignatura'
                onChangeText={setNombre}
                value={nombre}
            ></TextInput>

            <TextInput placeholder='Ingrese Cantidad de unidades'
                onChangeText={setUnidadesValorativas}
                value={unidadesValorativas}>
            </TextInput>

            {
                listaAsignatura.map((asignatura: Asignaturas) => (

                    <View>
                        <Text>Nombre Asignatura {asignatura.nombre}</Text>
                        <Text>Unidades Valorativas Asignatura {asignatura.unidadesValorativas}</Text>
                    </View>
                ))
            }

            <Text>LIsta desde un Flatlist</Text>

            <ListaAsignaturaComponent lista={listaAsignatura}></ListaAsignaturaComponent>

            <Button title="Guardar Asignatura" onPress={guardarAsignatura}></Button>
        </View>
    )
}