import { Tarea } from "src/app/tarea/shared/tarea";
/**
 * Interficie que extiende de Tarea
 */
export interface TareaId extends Tarea{
    id: string;
}