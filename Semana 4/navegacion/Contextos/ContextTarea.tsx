import { createContext } from "react";
import { Tarea } from "../modelos/Tarea";



export const ContextTarea = createContext({
    tarea: [] as Tarea[],
    setTarea: (tarea: Tarea[]) => { },
    agregarTarea: (tarea: Tarea) => { },
});