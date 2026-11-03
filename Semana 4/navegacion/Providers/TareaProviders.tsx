import { View, Text } from 'react-native'
import React, { useContext, useState } from 'react'
import { Tarea } from '../modelos/Tarea';
import { Plantilla } from '../modelos/Plantilla';
import { ContextTarea } from '../Contextos/ContextTarea';

//plantilla ReacNode
// darle funcionalidad a la plantilla
//exportar la plantilla

export default function TareaProviders({ children }: Plantilla) {

    const [tarea, setTarea] = useState<Tarea[]>([]);


    function agregarTarea(tareaparam: Tarea) {
        setTarea([...tarea, tareaparam]);
    }

    return (
        <ContextTarea.Provider value={{ tarea, setTarea, agregarTarea }}>
            {children}
        </ContextTarea.Provider>
    )
}

export const useContextTarea = () => {
    return useContext(ContextTarea);
}