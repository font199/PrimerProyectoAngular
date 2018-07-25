//mock-tarea.ts

import { Tarea } from "./tarea";
import { TareaId } from "./tarea-id";

export const TAREAS: TareaId[] = [
    { codigo: "TAR1", descripcion: "Creación componente tarea-list", aplicacion: "WorkFlowG", 
        tipo: "Feature", estado: "DES", fechaAlta: "2018/05/10", usuario: "Rul", 
        despliegue: "1.0", id: "1"},
    { codigo: "TAR2", descripcion: "Creación componente tarea-item", aplicacion: "WorkFlowG", 
        tipo: "Feature", estado: "PROD", fechaAlta: "2018/05/10", usuario: "Rul", 
        despliegue: "1.0" , id: "2"}
];