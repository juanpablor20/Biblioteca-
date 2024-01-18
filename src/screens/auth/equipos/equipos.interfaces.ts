export interface EquiposInterface     {
    id: number,
    numero_serie: number,
    estado: string,
    fecha_registro: Date
}

export interface ResponseEquiposInterface {
    equipos: EquiposInterface[]
}