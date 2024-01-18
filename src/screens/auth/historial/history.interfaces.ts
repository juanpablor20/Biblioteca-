export interface HistorialInterface {
    id: number,
    Numero_Documento: number,
    numero_serie: number,
    fecha_prestamo: Date,
    fechaDevolucion: null,
    equipos: {
        numero_serie: 2,
        estado: string
    },
    aprendice: {
        name: string ,
        apellido: string,
        tipo_identidad: string,
        Numero_Documento: number
    },
}

export interface ResponseHistorialInterface {
    prestamos: HistorialInterface[]
}